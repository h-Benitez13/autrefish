import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="uk-position-top uk-margin-top">
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
            {/* Home */}
            <li className="uk-active">
              <Link to="/Home">
                <span uk-icon="icon: home; ratio: 1.7" />
              </Link>
            </li>
            {/* Projects */}
            <li>
              <div className="uk-inline">
                <span
                  uk-icon="icon: album; ratio: 1.7"
                  style={{ padding: "1.7px" }}
                />
                <div uk-dropdown="mode:click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li className="uk-nav-header">Projects</li>
                    <li className=" uk-nav-divider" />
                    <li>
                      <Link to="/Projects/commercials">Commercials</Link>
                    </li>
                    <li className=" uk-nav-divider" />
                    <li>
                      <Link to="/Projects/musicVideos">Music Videos</Link>
                    </li>
                    <li className=" uk-nav-divider" />
                    <li>
                      <Link to="/Projects/tvSeries">Television Series</Link>
                    </li>
                    <li className=" uk-nav-divider" />
                    <li>
                      <Link to="/Projects/films">Films</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* About */}
            <li>
              <Link to="/About">
                <span uk-icon="icon: info; ratio: 1.7" />
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
              <a href="https://www.instagram.com/autrefish/">
                <span uk-icon="icon: instagram; ratio: 1.7" />
              </a>
            </li>
            <li className="uk-logo uk-position-right">
              <img
                src="Assets/Landing/autrefishlogo.png"
                alt="autrefish logo"
                style={{
                  width: "100px",
                  height: "100px",
                  marginRight: "50px"
                }}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
