import React, { useState } from "react";
import { Link } from "gatsby";

import "../scss/layout/header.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  const openMenu = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__container-logo">
            <img
              src="https://ik.imagekit.io/csdesigner/url_shortening_link/logo_WkC04VNlI.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677662802971"
              alt="logo"
            />
          </div>
          <div className="header__container-nav">
            <ul>
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Resources</Link>
              </li>
            </ul>
          </div>
          <div className="header__container-form">
            <button className="btn btn--md btn--radius">Login</button>
            <button className="btn btn--md btn--radius">Register</button>
          </div>
          <div
            className="header__container-menu"
            onClick={openMenu}
            role="presentation"
          >
            <div className="menu-line"></div>
          </div>
          <div className={active ? "menu-link active" : "menu-link"}>
            <ul className="link-list">
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Resources</Link>
              </li>
            </ul>
            <div className="link-button">
              <button className="btn btn--md btn--radius login">Login</button>
              <button className="btn btn--md btn--radius register">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
