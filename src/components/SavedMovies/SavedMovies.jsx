import "./savedMovies.scss";
import React, { useState } from "react";
import SearchForm from "../SearchForm/SerachForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import film1 from "../../images/film1.png";

function SavedMovies({ savedMovie, onChange, checked }) {
  console.log(savedMovie);
  const [showButton, setShowButton] = useState(false);
  const showLikeButtonClassName = `movie-card__delete-button ${
    showButton && "movie-card__delete-button_active"
  }`;

  function showDeleteButton() {
    setShowButton(true);
    console.log(showButton);
  }
  function hideDeleteButton() {
    setShowButton(false);
  }

  return (
    <div className='saved-movies'>
      <SearchForm onChange={onChange} checked={checked} />
      {/* <MoviesCardList savedMovie={savedMovie} /> */}
      <section className='movies-list'>
        <div className='movie-card'>
          <img
            className='movie-card__image'
            src={film1}
            alt='film'
            onMouseEnter={showDeleteButton}
            onMouseLeave={hideDeleteButton}
          ></img>

          <button
            aria-label='Лайк'
            className={showLikeButtonClassName}
            type='button'
            // onMouseOver={showDeleteButton}
          ></button>

          <div className='movie-card__text'>
            <h3 className='movie-card__title'>Film 1</h3>
            <p className='movie-card__duration'>1ч 22м</p>
          </div>
        </div>
        <div className='movie-card'>
          <img
            className='movie-card__image'
            src={film1}
            alt='film'
            onMouseOver={showDeleteButton}
            onMouseLeave={hideDeleteButton}
          ></img>

          <button
            aria-label='Лайк'
            className={showLikeButtonClassName}
            type='button'
          ></button>

          <div className='movie-card__text'>
            <h3 className='movie-card__title'>Film 5</h3>
            <p className='movie-card__duration'>1ч 22м</p>
          </div>
        </div>
        <div className='movie-card'>
          <img
            className='movie-card__image'
            src={film1}
            alt='film'
            onMouseOver={showDeleteButton}
            onMouseLeave={hideDeleteButton}
          ></img>

          <button
            aria-label='Лайк'
            className={showLikeButtonClassName}
            type='button'
          ></button>

          <div className='movie-card__text'>
            <h3 className='movie-card__title'>Film 3</h3>
            <p className='movie-card__duration'>1ч 22м</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SavedMovies;
