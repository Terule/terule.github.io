import React from 'react';
import './headerWidget.css';

function HeaderWidget({toggle, handleClick}) {
  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Aguiar</a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <em className="uil uil-estate nav__icon"></em> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <em className="uil uil-user nav__icon"></em> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <em className="uil uil-file nav__icon"></em> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <em className="uil uil-briefcase-alt nav__icon"></em> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portifolio" className="nav__link">
                <em className="uil uil-scenery nav__icon"></em> Portifolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <em className="uil uil-message nav__icon"></em> Contact
              </a>
            </li>
          </ul>

          <em className="uil uil-times nav__close" onClick={ handleClick }></em>
        </div>

          <div className="nav__toggle" onClick={ handleClick }>
            <em className="uil uil-apps"></em>
          </div>
      </nav>
    </header>
  );
}

export default HeaderWidget;