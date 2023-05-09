import "./SearchForm.scss";
import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
import { useForm } from "react-hook-form";
import { useState } from "react";
function SearchForm({ onSearchClick, checked, onChange }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(searchReq) {
    localStorage.setItem("searchReq", JSON.stringify(searchReq));
    onSearchClick(searchReq);
  }
  return (
    <div className='search-form'>
      <form
        className={`search-form__search-line`}
        name={`search`}
        id={`search`}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className='search-form__input'
          placeholder='фильм'
          {...register("search", {
            required: "Заполните поле",
            minLength: { value: 2, message: "Минимум 2 символа максимум 40" },
            maxLength: {
              value: 40,
              message: "Минимум 2 символа максимум 40",
            },
          })}
        />

        <button className='search-form__button'>Найти</button>
      </form>
      <span
        className='register__error
        register__error_visible'
        id='profile-name-error'
      >
        {errors?.search && (errors?.search.message || "Ошибка")}
      </span>
      <div className='search-form__tumbler'>
        <ToggleSwitch id='toggleSwitch' checked={checked} onChange={onChange} />
        <p className='search-form__short-films'>Короткометражки</p>
      </div>
    </div>
  );
}

export default SearchForm;
