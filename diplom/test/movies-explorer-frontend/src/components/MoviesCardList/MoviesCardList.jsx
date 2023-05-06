import "./MoviesCardList.scss";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import film1 from "../../images/film1.png";

function MoviesCardList({ slice, onCardClick, onCardLike }) {
  return (
    <section className='movies-list'>
      {/* <div className='movie-card'>
        <img className='movie-card__image' src={film1} alt='film'></img>
        <div className='movie-card__button-box'>
          <button
            aria-label='Лайк'
            className='movie-card__save-button'
            type='button'
          >
            Сохранить
          </button>
        </div>
        <div className='movie-card__text'>
          <h3 className='movie-card__title'>Film</h3>
          <p className='movie-card__duration'>1ч 22м</p>
        </div>
      </div> */}

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
