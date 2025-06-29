import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from './assets/logo.png';
import Countries from "./Countries";
import { theme } from "../tailwindTheme";

// import downArrow from './../assets/downarrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';

function Header() {
  const { active, setActive } = useState(false);
  const { showCountryDropdown, setShowCountryDropdown } = useState(false);
  const { showCategoryDropdown, setShowCategoryDropdown } = useState(false);
  const category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  function toggleTheme() {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full h-auto bg-grey-800 z-10 flex items-center justify justify-around">
        <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">
          News-On-Go
        </h3>

        {/* <span className="logo">
          <img src={logo,png} alt="News_On_Go" />
        </span> */}
        <ul
          className={
            active
              ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active"
              : " nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"
          }
        >
          <li>
            <Link
              className="no-underline font-semibold"
              to="/"
              onClick={() => setActive(!active)}
            >
              All News
            </Link>
          </li>
          <li className="dropdown-li">
            <Link
              className="no-underline font-semibold flex-center gap-2"
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowCountryDropdown(false);
              }}
            ></Link>
          </li>
          //diff country flags from flagpedia.net
          <ul
            className={
              showCategoryDropdown
                ? "dropdown p-2 show dropdown"
                : "dropdown p-2 "
            }
          >
            {Countries.map((element, index) => (
              <li
                key={index}
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              >
                <Link
                  to={`/ country/${element?.iso_2_alpha}`}
                  className="flex gap-3"
                  onClick={() => setactive(!active)}
                >
                  <img
                    src={`https://flagcdn.com/32x24/${element?.iso_2_alpha.toLowerCase()}.png`}
                    alt={element?.countryName}
                  />

                  <span>{element?.countryName}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* toggle from codepen website */}
          <li>
            <Link
              className="no-underline font-semibold"
              to="#"
              onClick={() => {
                toggleTheme();
              }}
            >
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
              </label>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
