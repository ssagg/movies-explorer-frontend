import "./Movies.scss";
import React, { useMemo } from "react";
import SearchForm from "../SearchForm/SerachForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";

function Movies({
  movies,
  isLoading,
  onSearchClick,
  checked,
  onChange,
  onSaveMovie,
  savedMovie,
  isShortMovie,
  isSearchReq,
  searchError,
}) {
  const [noOfElement, setNoOfElement] = useState(12);
  const [numShowMovies, setNumShowMovies] = useState(3);
  const slice = movies.slice(0, noOfElement);
  const loadmore = () => {
    setNoOfElement(noOfElement + numShowMovies);
  };
  const isMoreButtonShow = useMemo(() => {
    if (slice === null || slice.length === 100) {
      return false;
    } else {
      return true;
    }
  }, [slice]);

  useEffect(() => {
    window.addEventListener("resize", function (e) {
      setTimeout(handleResize, 2000);
    });

    function handleResize() {
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

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className='movies'>
      <SearchForm
        onSearchClick={onSearchClick}
        onChange={onChange}
        checked={checked}
        isSearchReq={isSearchReq}
      />

      {searchError && (
        <p className='movies__search-error'>Ошибка при обращении к серверу.</p>
      )}
      {isLoading && <Preloader />}
      {slice.length === 0 ? (
        <p className='movies__not-found'>Фильмы не найдены</p>
      ) : (
        <MoviesCardList
          slice={slice}
          onSaveMovie={onSaveMovie}
          savedMovie={savedMovie}
          isShortMovie={isShortMovie}
        />
      )}
      {isMoreButtonShow && (
        <div className='movies__more'>
          <button className='movies__button' onClick={loadmore}>
            Ещё
          </button>
        </div>
      )}
    </div>
  );
}

export default Movies;
