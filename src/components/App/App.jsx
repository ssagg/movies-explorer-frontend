import "./app.scss";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ModalMenu from "../ModalMenu/ModalMenu";
import Navigation from "../Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { api } from "../../utils/MoviesApi";

function App() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  function handleSideMemuClick() {
    setSideMenuOpen(!isSideMenuOpen);
  }
  function closeMenu() {
    setSideMenuOpen(false);
  }

  useEffect(() => {
    // tokenCheck()
    // if (loggedIn) {
    api
      .getMovies()
      .then((movies) => {
        setMovies([...movies]);
        // setCurrentUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
    // }
  }, []);

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='signup' element={<Register />} />
        <Route path='signin' element={<Login />} />
        <Route
          path='movies'
          element={<Movies movies={movies} onMenuClick={handleSideMemuClick} />}
        />
        <Route path='saved-movies' element={<SavedMovies movies={movies} />} />
        <Route
          path='profile'
          element={<Profile onMenuClick={handleSideMemuClick} />}
        />
        <Route path='404' element={<NotFoundPage />} />
      </Routes>
      <ModalMenu isOpen={isSideMenuOpen} onClose={closeMenu} />
    </div>
  );
}

export default App;
