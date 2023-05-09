import "./app.scss";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ModalMenu from "../ModalMenu/ModalMenu";
import { LoginDataContext } from "../Contexts/LoginDataContext";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { api } from "../../utils/MoviesApi";
import * as mainApi from "../../utils/MainApi";

function App() {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovie, setSavedMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  function handleLogin(userCredentials) {
    mainApi
      .signin(userCredentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.jwt);
        api.setHeaders(res.jwt);
        mainApi.setHeaders(res.jwt);
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        // loadUserEmail(userCredentials);
      });
  }
  function handleRegistration(userCredentials) {
    mainApi
      .signup(userCredentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.jwt);
        mainApi.setHeaders(res.jwt);
        // setIsRegPopupOpen(!isRegPopupOpen);
        // setIsRegSuccess(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        // setIsRegPopupOpen(!isRegPopupOpen);
        // setIsRegSuccess(false);
        console.log(err);
      });
  }
  function handleLogout() {
    setLoggedIn(false);
  }
  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((mySavedMovie) => {
          console.log(mySavedMovie);
          setSavedMovie([...mySavedMovie]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  const handleSearchClick = () => {
    setIsLoading(true);
    // tokenCheck()
    // if (loggedIn) {
    api
      .getMovies()
      .then((movies) => {
        console.log(movies);
        localStorage.setItem("movies", JSON.stringify(movies));
        const localMovies = JSON.parse(localStorage.getItem("movies"));
        console.log(localMovies);
        const searchReq = JSON.parse(
          localStorage.getItem("searchReq").toLowerCase()
        );
        console.log(searchReq.search);
        const showMovies = localMovies.filter((i) =>
          i.nameRU.toLowerCase().match(searchReq.search)
        );
        console.log(showMovies);

        setMovies([...showMovies]);

        // setCurrentUser(userData);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function handleSideMemuClick() {
    setSideMenuOpen(!isSideMenuOpen);
  }
  function closeMenu() {
    setSideMenuOpen(false);
  }
  useEffect(() => {
    localStorage.setItem("isShortFilm", JSON.stringify(checked));
  }, [checked]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   // tokenCheck()
  //   // if (loggedIn) {
  //   api
  //     .getMovies()
  //     .then((movies) => {
  //       setMovies([...movies]);
  //       // setCurrentUser(userData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  //   // }
  // }, []);
  function handleSaveMovie(
    // movie
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId
  ) {
    const urlSite = "https://api.nomoreparties.co";
    console.log(image);
    mainApi
      .saveMovie(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId
      )
      .then((movie) => {
        console.log(movie);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    mainApi
      .updateUserInfo(data)
      .then((userData) => {
        setCurrentUser(userData);
        // closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    tokenCheck();
    // if (loggedIn) {
    //   mainApi
    //     .getUserInfo()
    //     .then((userData) => {
    //       console.log(userData);
    //       setCurrentUser(userData);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  }, [loggedIn]);

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi.userValidation(token).then((res) => {
        console.log(res);
        api.setHeaders(token);
        mainApi.setHeaders(token);
        setLoggedIn(true);
        setCurrentUser(res);
        // loadUserEmail(res);
        navigate("/movies", { replace: true });
      });
    }
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <LoginDataContext.Provider value={loggedIn}>
          <Header onMenuClick={handleSideMemuClick} />
          <Routes>
            <Route
              path='*'
              element={
                loggedIn ? (
                  <Navigate to='/movies' replace />
                ) : (
                  <Navigate to='/signin' replace />
                )
              }
            />

            <Route path='/' element={<Main />} />
            <Route
              path='signup'
              element={<Register handleRegistration={handleRegistration} />}
            />
            <Route
              path='signin'
              element={<Login handleLogin={handleLogin} />}
            />
            <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
              <Route
                path='movies'
                element={
                  <Movies
                    isLoading={isLoading}
                    movies={movies}
                    onMenuClick={handleSideMemuClick}
                    onSearchClick={handleSearchClick}
                    checked={checked}
                    onChange={setChecked}
                    onSaveMovie={handleSaveMovie}
                  />
                }
              />
              <Route
                path='saved-movies'
                element={
                  <SavedMovies
                    savedMovie={savedMovie}
                    checked={checked}
                    onChange={setChecked}
                  />
                }
              />
              <Route
                path='profile'
                element={
                  <Profile
                    onMenuClick={handleSideMemuClick}
                    handleLogout={handleLogout}
                    handleUpdateUser={handleUpdateUser}
                  />
                }
              />
            </Route>
            <Route path='404' element={<NotFoundPage />} />
          </Routes>
          <ModalMenu isOpen={isSideMenuOpen} onClose={closeMenu} />
          <Footer />
        </LoginDataContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
