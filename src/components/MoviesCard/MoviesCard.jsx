import "./MoviesCard.scss";
import React, { useState } from "react";

function MoviesCard({ movie, handleLikeClick, onSaveMovie }) {
  console.log(movie.image);
  const [isLiked, setIsLiked] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const showLikeButtonClassName = `movie-card__save-button ${
    showButton && "movie-card__save-button_show"
  } ${isLiked && "movie-card__save-button_active"}`;

  const showButtonClassName = `movie-card__save-button_active ${
    showButton && "movie-card__save-button_show"
  } ${isLiked && "movie-card__save-button_active_show"}`;

  const urli = "https://api.nomoreparties.co";

  function handleLikeClick() {
    setIsLiked(true);
    onSaveMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      urli + movie.image.url,
      movie.trailerLink,
      movie.nameRU,
      movie.nameEN,
      urli + movie.image.formats.thumbnail.url,
      movie.id
    );
  }
  function showLikeButton() {
    setShowButton(true);
    console.log(showButton);
  }
  function hideLikeButton() {
    if (!isLiked) {
      setShowButton(false);
    }
  }
  return (
    <li className='movie-card'>
      <img
        className='movie-card__image'
        src={`${urli}${movie.image.url}` || movie.image}
        alt='film'
        onMouseOver={showLikeButton}
        onMouseLeave={hideLikeButton}
      ></img>
      <button
        aria-label='Лайк'
        className={showLikeButtonClassName}
        type='button'
        onClick={handleLikeClick}
        onMouseOver={showLikeButton}
      >
        Сохранить
      </button>
      <button aria-label='Лайк' className={showButtonClassName} type='button' />

      <div className='movie-card__text'>
        <h3 className='movie-card__title'>{movie.nameRU}</h3>
        <p className='movie-card__duration'>
          {Math.floor(movie.duration / 60)}ч {movie.duration % 60}м
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
