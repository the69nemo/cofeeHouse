import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/Logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <Link to="/">
            <img className="header__logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <nav className="header__menu">
          <li className="header__menu-item">
            <Link to="/" className="header__link">
              Home
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/menu" className="header__link">
              Menu
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/about" className="header__link">
              About Us
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/ourstory" className="header__link">
              Our Story
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/blog" className="header__link">
              Blog
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/contact" className="header__link">
              Contact
            </Link>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
