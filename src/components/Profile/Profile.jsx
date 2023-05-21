import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./profile.scss";

import { CurrentUserContext } from "../Contexts/CurrentUserContext";

function Profile({ handleLogout, handleUpdateUser }) {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const [disabled, setDisabled] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const hideEditProfileButtonClassName = `profile__edit ${
    showButton && "profile__edit_disabled"
  }`;
  const hideExitProfileButtonClassName = `profile__logout-link ${
    showButton && "profile__logout-link_disabled"
  }`;

  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const defaultValues = {};
    defaultValues.name = currentUser.name;
    defaultValues.email = currentUser.email;
    reset({ ...defaultValues });
  }, [currentUser]);

  function signOut() {
    handleLogout();
    navigate("/signin", { replace: true });
  }
  function enableProfileInput(e) {
    e.preventDefault();
    setDisabled(false);
    setShowButton(true);
  }

  function onSubmit(name, email) {
    handleUpdateUser(name, email);
    setShowButton(false);
    setDisabled(true);
  }

  return (
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
          <label className='profile__label' htmlFor='profile-email'>
            Имя
          </label>
          <input
            disabled={disabled}
            type='name'
            className='profile__input profile__input_type_name'
            placeholder='Василий'
            id='register-name'
            {...register("name", {
              required: "Заполните поле",
              minLength: {
                value: 2,
                message: "Минимум 2 символа максимум 40",
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
          {errors?.name && (errors?.name.message || "Ошибка")}
        </span>
        <div className='profile__input-form'>
          <label className='profile__label' htmlFor='register-email'>
            E-mail
          </label>
          <input
            disabled={disabled}
            type='email'
            className='profile__input profile__input_type_about'
            placeholder='pupkin@ya.com'
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
        <span
          className='profile__error
        profile__error_visible'
          id='email-name-error'
        >
          {errors?.email && (errors?.email.message || "Ошибка")}
        </span>

        <button
          disabled={!isValid || !isDirty}
          className={`profile__save ${showButton && "profile__save_show"} ${
            (!isValid || !isDirty) && "profile__save_show_disabled"
          }`}
          type='submit'
          id={`button-profile`}
        >
          Сохранить
        </button>
        <button
          className={hideEditProfileButtonClassName}
          onClick={enableProfileInput}
        >
          Редактировать&nbsp;
        </button>
        <button className={hideExitProfileButtonClassName} onClick={signOut}>
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
}

export default Profile;
