import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./profile.scss";
import Navigation from "../Navigation/Navigation";

function Profile({ handleRegistration, onMenuClick }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(email, name) {
    handleRegistration(email, name);
  }

  return (
    <>
      <Navigation onMenuClick = {onMenuClick}/>
      <div className='profile'>
        <h2 className='profile__title'>Привет, Василий!</h2>
        <form
          className={`profile__form`}
          name={`profile`}
          id={`profile`}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='profile__input-form'>
            <label className='profile__label' htmlFor='register-email'>
              Имя
            </label>
            <input
              disabled='disabled'
              type='email'
              className='profile__input profile__input_type_name'
              placeholder='Василий'
              id='register-email'
              {...register("email", {
                required: "Заполните поле",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа максимум 40",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Введите корректный email",
                },
                maxLength: {
                  value: 40,
                  message: "Минимум 2 символа максимум 40",
                },
              })}
            />
          </div>
          <div className='profile__line'></div>
          <span
            className='profile__error
        profile__error_visible'
            id='profile-name-error'
          >
            {errors?.email && (errors?.email.message || "Ошибка")}
          </span>
          <div className='profile__input-form'>
            <label className='profile__label' htmlFor='register-email'>
              E-mail
            </label>
            <input
              disabled='disabled'
              type='email'
              className='profile__input profile__input_type_about'
              placeholder='pupkin@ya.com'
              id='register-email'
              {...register("email", {
                required: "Заполните поле",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа максимум 8",
                },
                maxLength: {
                  value: 8,
                  message: "Минимум 2 символа максимум 8",
                },
              })}
            />
          </div>
          <span
            className='profile__error
        profile__error_visible'
            id='email-name-error'
          >
            {errors?.email && (errors?.email.message || "Ошибка")}
          </span>
          <div className='profile__edit'>
            Редактировать&nbsp;
            <Link to='/signup' className='profile__logout-link'>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
