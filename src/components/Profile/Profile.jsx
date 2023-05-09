import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./profile.scss";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";

function Profile({ handleLogout, onMenuClick, handleUpdateUser }) {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const [disabled, setDisabled] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [showButton, setShowButton] = useState(false);
  // const showSaveProfileButtonClassName = `profile__save ${
  //   showButton && "profile__save_show"
  // }${!isValid && "profile__save_show_disabled"}`;

  const hideEditProfileButtonClassName = `profile__edit ${
    showButton && "profile__edit_disabled"
  }`;
  const hideExitProfileButtonClassName = `profile__logout-link ${
    showButton && "profile__logout-link_disabled"
  }`;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const defaultValues = {};
    console.log(currentUser);
    console.log(currentUser.name);
    console.log(currentUser.email);
    defaultValues.name = currentUser.name;
    defaultValues.email = currentUser.email;
    reset({ ...defaultValues });
  }, [currentUser]);

  function signOut() {
    localStorage.removeItem("token");
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
  }

  return (
    <>
      {/* <Navigation onMenuClick={onMenuClick} /> */}
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
            disabled={!isValid}
            className={`profile__save ${showButton && "profile__save_show"} ${
              !isValid && "profile__save_show_disabled"
            }`}
            // className={showSaveProfileButtonClassName`${
            //   !isValid && "profile__save_show_disabled"
            // }`}
            // onClick={handleUpdateUser}
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
    </>
  );
}

export default Profile;
