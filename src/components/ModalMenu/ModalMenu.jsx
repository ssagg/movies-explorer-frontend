import "./ModalMenu.scss";
import { Link, NavLink } from "react-router-dom";
function ModalMenu({ isOpen, onClose }) {
  return (
    <div className={`modal-menu ${isOpen && "modal-menu_opened"}`}>
      <nav className='modal-menu__container'>
        <button
          aria-label='Закрыть'
          className={`modal-menu__button-close`}
          type='button'
          onClick={onClose}
        />
        <div className='modal-menu__menu'>
          <Link className='modal-menu__link' to='/' onClick={onClose}>
            Главная
          </Link>
          <NavLink
            to='/movies'
            onClick={onClose}
            className={({ isActive }) =>
              `${isActive ? "modal-menu__link_active" : "modal-menu__link"}`
            }
          >
            Фильмы
          </NavLink>

          <NavLink
            to='/saved-movies'
            onClick={onClose}
            className={({ isActive }) =>
              `${isActive ? "modal-menu__link_active" : "modal-menu__link"}`
            }
          >
            Сохраненные фильмы
          </NavLink>
        </div>
        <div className='modal-menu__profile'>
          <Link className='modal-menu__button' to='/profile' onClick={onClose}>
            <p className='modal-menu__text'>Аккаунт</p>
          </Link>
          <div className='modal-menu__profile-logo'>
            <div className='modal-menu__profile-logo-image'></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ModalMenu;
