import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="uk-position-top">
      <nav
        className="uk-navbar-container uk-navbar-transparent"
        uk-navbar
        uk-sticky="animation: uk-animation-slide-top"
      >
        <div className="uk-flex uk-flex-center">
          <ul
            className="uk-iconnav uk-dark"
            uk-scrollspy="cls: uk-animation-fade; target: > li ; delay: 300; repeat:true"
          >
            <li className="uk-active">
              <Link to="/Home">
                <span uk-icon="icon: home; ratio: 1.7" />
              </Link>
            </li>
            <li>
              <Link to="/About">
                <span uk-icon="icon: info; ratio: 1.7" />
              </Link>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <span uk-icon="icon: instagram; ratio: 1.7" />
              </a>
            </li>
            <li>
              <div className="uk-inline">
                <span
                  uk-icon="icon: album; ratio: 1.7"
                  uk-tooltip="work"
                  style={{ padding: "1.7px" }}
                />
                <div uk-dropdown="mode:click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li className="uk-active">
                      <Link to="/Work/pro1">pro1</Link>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li className="uk-nav-header">Header</li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li className="uk-nav-divider" />
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="/Portfolio">
                <span uk-icon="icon: users; ratio: 1.7" />
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <span uk-icon="icon: quote-right; ratio: 1.7" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
