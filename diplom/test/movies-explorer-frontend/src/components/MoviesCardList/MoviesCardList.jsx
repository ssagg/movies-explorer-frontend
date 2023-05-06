import "./MoviesCardList.scss";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ slice, onCardClick, onCardLike }) {
  return (
    <section className='movies-list'>
      {slice.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            key={movie.id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
          />
        );
      })}
    </section>
  );
}

export default MoviesCardList;
