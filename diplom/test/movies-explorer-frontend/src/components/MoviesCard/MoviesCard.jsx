import "./MoviesCard.scss";
import React, { useState } from "react";

function MoviesCard({ movie, handleLikeClick, onCardLike }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showButton, setShowButton] = useState(false);
  // const cardLikeButtonClassName = `movie-card__save-button ${
  //   isLiked && "movie-card__save-button_active"
  // }`;

  const showLikeButtonClassName = `movie-card__save-button ${
    showButton && "movie-card__save-button_show"
  } ${isLiked && "movie-card__save-button_active"}`;

  const url = "https://api.nomoreparties.co";

  function handleLikeClick() {
    setIsLiked(true);
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
    <div className='movie-card'>
      <img
        className='movie-card__image'
        src={`${url}${movie.image.url}`}
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

      <div className='movie-card__text'>
        <h3 className='movie-card__title'>{movie.nameRU}</h3>
        <p className='movie-card__duration'>
          {Math.floor(movie.duration / 60)}ч {movie.duration % 60}м
        </p>
      </div>
    </div>
  );
}

export default MoviesCard;
