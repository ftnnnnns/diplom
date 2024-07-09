import React from 'react';
import { Link } from 'react-router-dom'; // Импорт Link из react-router-dom
import logotipe from './logotipe.png';

import './App.css';

function Information() {
  return (
    <div>
      <header className="App-header">
        <img src={logotipe} className="App-logo" alt="logo" /> 
        <h1 className="App-title">ИНЭК-ПОВОЛЖЬЕ</h1>
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><Link to="/about">О нас</Link></li> 
            <li><a href="#">Контакты</a></li>
            <li><Link to="/services">Наши услуги</Link></li> 
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Information;
