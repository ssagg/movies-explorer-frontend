import "./SearchForm.scss";
import ToggleSwitch from "../ToogleSwitch/ToggleSwitch";
import { useState } from "react";
function SearchForm() {
  const [checked, setChecked] = useState(false);
  return (
    <div className='search-form'>
      <form className='search-form__search-line'>
        <input className='search-form__input' placeholder='фильм'></input>
        <button className='search-form__button'>Найти</button>
      </form>
      <div className='search-form__tumbler'>
        <ToggleSwitch id='toggleSwitch' />
        <p className='search-form__short-films'>Короткометражки</p>
      </div>
    </div>
  );
}

export default SearchForm;
