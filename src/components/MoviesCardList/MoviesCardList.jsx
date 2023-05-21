import "./MoviesCardList.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  slice,
  savedMovie,
  onCardClick,
  onCardLike,
  onSaveMovie,
  onDeleteMovie,
  isShortMovie,
}) {
  const location = useLocation();
  if (location.pathname === "/saved-movies") {
    slice = savedMovie;
  }

  if (isShortMovie) {
    slice = slice.filter((movie) => movie.duration <= 40);
  }

  return (
    <section className='movies-list'>
      {slice.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            key={movie.id || movie._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            savedMovie={savedMovie}
            isShortMovie={isShortMovie}
          />
        );
      })}
    </section>
  );
}

export default MoviesCardList;
