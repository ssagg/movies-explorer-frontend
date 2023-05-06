import React from "react";
import { useNavigate } from "react-router-dom";
import "./notFoundPage.scss";

function NotFoundPage() {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
    }
  return (
    <div className='error-page'>
      <h1 className='error-page__title'>404</h1>
      <p className='error-page__subtitle'>Страница не найдена</p>

      <div className='error-page__back-link' onClick={goBack}>
        Назад
      </div>
    </div>
  );
}

export default NotFoundPage;
