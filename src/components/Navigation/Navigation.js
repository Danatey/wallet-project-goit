import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Media from "react-media";
import PropTypes from "prop-types";
import home from "../../images/svg/home.svg";
import diagram from "../../images/svg/diagram.svg";
import currency from "../../images/svg/currency.svg";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav_container">
      <ul className="nav_list">
        <li>
          <NavLink
            to="/home"
            className="nav_link"
            ClassName="nav_link_active"
          >
            <img src={home} alt="home" className="nav_img" />
            <Media
              query="(min-width: 768px)"
              render={() => <span className="nav_text">Главная</span>}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/diagram"
            className="nav_link"
            ClassName="nav_link_active"
          >
            <img src={diagram} alt="diagram" className="nav_img" />
            <Media
              query="(min-width: 768px)"
              render={() => (
                <span className="nav_text">Статистика</span>
              )}
            />
          </NavLink>
        </li>

        <li  className="nav_link_currency">
          <Media
            query="(max-width: 767px)"
            render={() => (
              <NavLink
               to="/currency"
               className="nav_link"
              
               ClassName="nav_link_active">
                <img
                  src={currency}
                  width="44"
                  height="44"
                  alt="currency"
                  className="nav_img"
                />
              </NavLink>
            )}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
