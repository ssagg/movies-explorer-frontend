import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./register.scss";

function Register({ handleRegistration }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(userCredentials) {
    handleRegistration(
      userCredentials.name,
      userCredentials.password,
      userCredentials.email
    );
  }

  return (
    <div className='register'>
      <div className='register__logo'></div>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form
        className={`register__form`}
        name={`register`}
        id={`register`}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='register__label' htmlFor='register-name'>
          Имя
        </label>
        <input
          type='name'
          className='register__input register__input_type_name'
          placeholder='Name'
          id='register-name'
          {...register("name", {
            required: "Заполните поле",
            minLength: { value: 2, message: "Минимум 2 символа максимум 40" },
            maxLength: {
              value: 40,
              message: "Минимум 2 символа максимум 40",
            },
          })}
        />
        <span
          className='register__error
        register__error_visible'
          id='profile-name-error'
        >
          {errors?.name && (errors?.name.message || "Ошибка")}
        </span>
        <label className='register__label' htmlFor='register-email'>
          E-mail
        </label>
        <input
          type='email'
          className='register__input register__input_type_name'
          placeholder='Email'
          id='register-email'
          {...register("email", {
            required: "Заполните поле",
            minLength: { value: 2, message: "Минимум 2 символа максимум 40" },
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
        <span
          className='register__error
        register__error_visible'
          id='profile-name-error'
        >
          {errors?.email && (errors?.email.message || "Ошибка")}
        </span>
        <label className='register__label' htmlFor='register-password'>
          Пароль
        </label>
        <input
          type='password'
          className='register__input register__input_type_about'
          placeholder='Пароль'
          id='register-password'
          {...register("password", {
            required: "Заполните поле",
            minLength: { value: 2, message: "Минимум 2 символа максимум 8" },
            maxLength: {
              value: 8,
              message: "Минимум 2 символа максимум 8",
            },
          })}
        />
        <span
          className='register__error
        register__error_visible'
          id='password-name-error'
        >
          {errors?.password && (errors?.password.message || "Ошибка")}
        </span>
        <button
          disabled={!isValid}
          className={`register__button ${
            !isValid && "register__button_disabled"
          }`}
          type='submit'
          id={`button-register`}
        >
          Зарегистрироваться
        </button>
        <div className='register__signup'>
          Уже зарегистрированы?&nbsp;
          <Link to='/signin' className='register__signup-link'>
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
