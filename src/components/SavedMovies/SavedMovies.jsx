import "./savedMovies.scss";
import React from "react";
import SearchForm from "../SearchForm/SerachForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({
  savedMovie,
  onChange,
  checked,
  onDeleteMovie,
  isShortMovie,
  onSearchClick,
}) {
  if (isShortMovie) {
    savedMovie = savedMovie.filter((movie) => movie.duration <= 40);
  }

  return (
    <div className='saved-movies'>
      <SearchForm
        onChange={onChange}
        checked={checked}
        onSearchClick={onSearchClick}
      />
      <MoviesCardList
        savedMovie={savedMovie}
        key={savedMovie.id}
        onDeleteMovie={onDeleteMovie}
      />
    </div>
  );
}

export default SavedMovies;
