// import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="nav">
        <span onClick={() => navigate('/')}>Главная</span>
        <span onClick={() => navigate('/contacts')}>Контакты</span>
        <span onClick={() => navigate('/cart')}>Корзина</span>
        <span onClick={() => navigate('/filter')}>Фильтрация</span>
      </div>
    </div>
  );
};

export default Header;
