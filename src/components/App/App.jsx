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
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { LoginDataContext } from "../Contexts/LoginDataContext";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { api } from "../../utils/MoviesApi";
import * as mainApi from "../../utils/MainApi";

function App() {
  const [isRegPopupOpen, setIsRegPopupOpen] = useState(false);
  const [isRegSuccess, setIsRegSuccess] = useState(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovie, setSavedMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isShortMovie, setIsShotMovie] = useState(false);
  const [isSearchReq, setIsSearchReq] = useState("");
  const navigate = useNavigate();

  const onIsShortMovieChange = (checked) => {
    setIsShotMovie(checked);
  };

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem("isShortFilm", JSON.stringify(isShortMovie));
    }
  }, [loggedIn]);

  function handleLogin(password, email) {
    mainApi
      .signin(password, email)
      .then((res) => {
        localStorage.setItem("token", res.jwt);
        mainApi.setHeaders(res.jwt);
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => console.log(err));
  }

  function handleRegistration(name, password, email) {
    mainApi
      .signup(name, password, email)
      .then((res) => {
        handleLogin(password, email);
      })
      .catch((err) => {
        setIsRegPopupOpen(!isRegPopupOpen);
        setIsRegSuccess(false);
        console.log(err);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.clear();
  }

  function handleUpdateUser(data) {
    mainApi
      .updateUserInfo(data)
      .then((userData) => {
        setIsRegPopupOpen(!isRegPopupOpen);
        setIsRegSuccess(true);
        setCurrentUser(userData);
      })
      .catch((error) => {
        setIsRegPopupOpen(!isRegPopupOpen);
        setIsRegSuccess(false);
        console.log(error);
      });
  }

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((savedMovie) => {
          setSavedMovie([...savedMovie]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  const handleSearchClick = () => {
    if ("movies" in localStorage) {
      const localMovies = JSON.parse(localStorage.getItem("movies"));
      const searchReq = JSON.parse(
        localStorage.getItem("searchReq").toLowerCase()
      );
      setIsSearchReq(searchReq.search);
      const showMovies = localMovies.filter((i) =>
        i.nameRU.toLowerCase().match(searchReq.search)
      );
      localStorage.setItem("showedMovies", JSON.stringify(showMovies));
      setMovies([...showMovies]);
    } else {
      setIsLoading(true);
      api
        .getMovies()
        .then((movies) => {
          localStorage.setItem("movies", JSON.stringify(movies));
        })
        .catch((error) => {
          setSearchError(true);
          console.log(error);
        })
        .finally(() => {
          setSearchError(false);
          setIsLoading(false);
          const localMovies = JSON.parse(localStorage.getItem("movies"));
          const searchReq = JSON.parse(
            localStorage.getItem("searchReq").toLowerCase()
          );
          setIsSearchReq(searchReq.search);
          const showMovies = localMovies.filter((i) =>
            i.nameRU.toLowerCase().match(searchReq.search)
          );
          localStorage.setItem("showedMovies", JSON.stringify(showMovies));
          setMovies([...showMovies]);
        });
    }
  };

  const handleSearchSavedMoviesClick = (searchReq) => {
    const showSearchedSavedMovies = savedMovie.filter((i) =>
      i.nameRU.toLowerCase().match(searchReq.search)
    );
    setSavedMovie([...showSearchedSavedMovies]);
  };

  function handleSideMemuClick() {
    setSideMenuOpen(!isSideMenuOpen);
  }
  function closeAllPopups() {
    setSideMenuOpen(false);
    setIsRegPopupOpen(false);
  }

  function handleSaveMovie(
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
    const issetLiked = savedMovie.some((i) => i.movieId === movieId);
    if (!issetLiked) {
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
          setSavedMovie([movie, ...savedMovie]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteLike(movie._id)
      .then(() => {
        setSavedMovie((state) =>
          state.filter((i) => i.movieId !== movie.movieId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi.userValidation(token).then((res) => {
        mainApi.setHeaders(token);
        setLoggedIn(true);
        setCurrentUser(res);
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
                  <Navigate to='/' replace />
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
                    savedMovie={savedMovie}
                    onMenuClick={handleSideMemuClick}
                    onSearchClick={handleSearchClick}
                    checked={isShortMovie}
                    onChange={onIsShortMovieChange}
                    onSaveMovie={handleSaveMovie}
                    isShortMovie={isShortMovie}
                    isSearchReq={isSearchReq}
                    searchError={searchError}
                  />
                }
              />
              <Route
                path='saved-movies'
                element={
                  <SavedMovies
                    savedMovie={savedMovie}
                    checked={isShortMovie}
                    onChange={onIsShortMovieChange}
                    onDeleteMovie={handleDeleteMovie}
                    isShortMovie={isShortMovie}
                    onSearchClick={handleSearchSavedMoviesClick}
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
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <ModalMenu isOpen={isSideMenuOpen} onClose={closeAllPopups} />
          <InfoTooltip
            isOpen={isRegPopupOpen}
            onClose={closeAllPopups}
            isRegSuccess={isRegSuccess}
          />
          <Footer />
        </LoginDataContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
