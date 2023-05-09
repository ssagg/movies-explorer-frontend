import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.scss";

function Login({ handleLogin }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(password, email) {
    handleLogin(password, email);
  }

  return (
    <div className='login'>
      <div className='login__logo'></div>
      <h2 className='login__title'>Рады видеть!</h2>
      <form
        className={`login__form`}
        name={`login`}
        id={`login`}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='login__label' htmlFor='register-email'>
          E-mail
        </label>
        <input
          type='email'
          className='login__input login__input_type_name'
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
          className='login__error
        login__error_visible'
          id='profile-name-error'
        >
          {errors?.email && (errors?.email.message || "Ошибка")}
        </span>
        <label className='login__label' htmlFor='register-password'>
          Пароль
        </label>
        <input
          type='password'
          className='login__input login__input_type_about'
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
          className='login__error
        login__error_visible'
          id='password-name-error'
        >
          {errors?.password && (errors?.password.message || "Ошибка")}
        </span>
        <button
          disabled={!isValid}
          className={`login__button ${!isValid && "login__button_disabled"}`}
          type='submit'
          id={`button-login`}
        >
          Войти
        </button>
        <div className='login__signup'>
          Ещё не зарегистрированы?&nbsp;
          <Link to='/signup' className='login__signup-link'>
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
