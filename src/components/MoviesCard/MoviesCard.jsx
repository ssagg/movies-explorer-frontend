import "./MoviesCard.scss";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, onSaveMovie, onDeleteMovie, savedMovie }) {
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);
  const [showDelButton, setShowDeleteButton] = useState(false);

  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  const urli = "https://api.nomoreparties.co";
  let img = "";
  let movieButton = "";

  let issetLiked = savedMovie
    ? savedMovie.some((i) => i.movieId === movie.id)
    : false;

  if (location.pathname === "/movies") {
    img = `${urli}${movie.image.url}`;
    movieButton = showLikeButton;
  } else if (location.pathname === "/saved-movies") {
    img = movie.thumbnail;
    movieButton = showDeleteButton;
  }

  function handleDeleteClick() {
    onDeleteMovie(movie);
  }

  function handleLikeClick() {
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
  }

  function showDeleteButton() {
    setShowDeleteButton(true);
  }

  function hideLikeButton() {
    if (!issetLiked) {
      setShowButton(false);
    }
    setShowDeleteButton(false);
  }

  return (
    <li className='movie-card'>
      <img
        className='movie-card__image'
        src={img}
        alt='film'
        onClick={() =>
          window.open(movie.trailerLink, "_blank", "rel=noopener noreferrer")
        }
        onMouseOver={movieButton}
        onMouseLeave={hideLikeButton}
      ></img>

      {location.pathname === "/saved-movies" ? (
        <button
          aria-label='Лайк'
          className={`movie-card__delete-button ${
            showDelButton && "movie-card__delete-button_active"
          }`}
          type='button'
          onClick={handleDeleteClick}
          onMouseOver={movieButton}
        ></button>
      ) : (
        <button
          aria-label='Лайк'
          className={
            issetLiked
              ? `movie-card__save-button_active movie-card__save-button_show`
              : `movie-card__save-button ${
                  showButton && "movie-card__save-button_show"
                }`
          }
          type='button'
          onClick={handleLikeClick}
          onMouseOver={movieButton}
        >
          Сохранить
        </button>
      )}

      <div className='movie-card__text'>
        <h3 className='movie-card__title'>{movie.nameRU}</h3>
        <p className='movie-card__duration'>
          {`${hours === 0 ? "" : hours + "ч"} ${minutes}м`}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
