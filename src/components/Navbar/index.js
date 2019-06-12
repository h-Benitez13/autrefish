import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav
        id="webNav"
        className="uk-navbar-container uk-margin-top uk-navbar-transparent"
        uk-sticky="animation: uk-animation-slide-top"
      >
        <div className="uk-flex uk-flex-center">
          <ul
            className="uk-iconnav uk-dark"
            uk-scrollspy="cls: uk-animation-fade; target: > li ; delay: 300; repeat:true"
          >
            {/* Home */}
            <li className="uk-active">
              <Link to="/Home">
                <span uk-icon="icon: home; ratio: 1.7" />
              </Link>
            </li>

            {/* About */}
            <li>
              <Link to="/About">
                <img
                  src="/Assets/Landing/aboutSym.png"
                  alt="About page icon"
                  width="40px"
                />
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link to="/Contact">
                <span uk-icon="icon: quote-right; ratio: 1.7" />
              </Link>
            </li>

            {/* Instagram */}
            <li>
              <a
                style={{ display: "target-cell" }}
                href="https://www.instagram.com/autrefish/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="/Assets/Landing/instaIcon.png"
                  alt="Instagram Icon"
                  width="40px"
                />
              </a>
            </li>
            <li id="autreFish" className="uk-logo uk-position-left">
              <img
                src="Assets/Landing/autrefish.png"
                alt="autrefish logo"
                style={{
                  width: "100px",
                  height: "100px"
                }}
              />
            </li>
          </ul>
        </div>
      </nav>
      <nav
        id="mobileNav"
        className="uk-navbar uk-navbar-container uk-navbar-transparent uk-margin-bottom"
      >
        <div className="uk-navbar-left">
          <div className="uk-inline">
            <span uk-icon="icon: table; ratio: 1.5" />
          </div>

          <div uk-dropdown="mode: click">
            <div className="uk-nav uk-navbar-dropdown-nav uk-navbar-dropdown-width-1">
              <div
                className="uk-navbar-dropdown-grid uk-child-width-1-2"
                uk-grid
                uk-navbar="boundary-align: true; align: center"
              >
                <div>
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active uk-nav-header">
                      <Link to="/Home"> Home</Link>
                    </li>
                    <li className="uk-active uk-nav-header">
                      <Link to="/About">About</Link>
                    </li>

                    <li className="uk-active uk-nav-header">
                      <Link to="/Contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="uk-nav-item uk-logo">
            <img
              src="Assets/Landing/autrefish.png"
              alt="AutreFish logo"
              width="150px"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
