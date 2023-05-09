import "./Movies.scss";
import React from "react";
import SearchForm from "../SearchForm/SerachForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";

function Movies({
  movies,
  onMenuClick,
  isLoading,
  onSearchClick,
  checked,
  onChange,
  onSaveMovie,
}) {
  const [noOfElement, setNoOfElement] = useState(12);
  const [numShowMovies, setNumShowMovies] = useState(3);

  const slice = movies.slice(0, noOfElement);
  const loadmore = () => {
    setNoOfElement(noOfElement + numShowMovies);
  };
  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      if (window.innerWidth < 1170) {
        setNoOfElement(8);
        setNumShowMovies(2);
      }
      if (window.innerWidth < 550) {
        setNoOfElement(5);
        setNumShowMovies(1);
      } else if (window.innerWidth > 1170) {
        setNoOfElement(12);
        setNumShowMovies(3);
      }
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className='movies'>
      {/* <Navigation onMenuClick={onMenuClick} /> */}
      <SearchForm
        onSearchClick={onSearchClick}
        onChange={onChange}
        checked={checked}
      />
      {isLoading && <Preloader />}

      <MoviesCardList slice={slice} onSaveMovie={onSaveMovie} />
      <div className='movies__more'>
        <button className='movies__button' onClick={loadmore}>
          Ещё
        </button>
      </div>
    </div>
  );
}

export default Movies;
