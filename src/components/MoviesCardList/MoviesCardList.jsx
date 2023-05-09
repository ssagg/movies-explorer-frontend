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
}) {
  const location = useLocation();
  if (location.pathname === "/saved-movies") {
    console.log(location);
    slice = savedMovie;
  }
  return (
    <section className='movies-list'>
      {slice.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            key={movie.id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onSaveMovie={onSaveMovie}
          />
        );
      })}
    </section>
  );
}

export default MoviesCardList;
