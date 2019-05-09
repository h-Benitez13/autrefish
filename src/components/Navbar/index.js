import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="uk-position-top">
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar uk-sticky="animation: uk-animation-slide-top">
                <div className="uk-flex uk-flex-center">
                    <ul className="uk-navbar-nav uk-light" uk-scrollspy="cls: uk-animation-fade; target: > li ; delay: 300; repeat:true" >
                        <li className="uk-active">
                            <Link to="/Home">
                                <div className="uk-visible-toggle uk-navbar-item uk-logo" tabIndex="0">
                                    <span uk-icon="icon: home; ratio: 2.5"></span>
                                    <h2 className="uk-invisible-hover">
                                        Home
                                    </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">
                                <div className="uk-visible-toggle uk-navbar-item uk-logo" tabIndex="0">
                                    <span uk-icon="icon: info; ratio: 2.5"></span>
                                    <h2 className="uk-invisible-hover">
                                        About
                                    </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <div class="uk-visible-toggle uk-navbar-item" tabIndex="-1">
                                <span uk-icon="icon: instagram; ratio: 2.5"></span>
                                <h2 className="uk-invisible-hover">
                                    <a href="https://www.instagram.com/"> Insta
                            </a>
                                </h2>
                            </div>
                        </li>
                        <li>
                            <Link to="/Contact">
                                <div className="uk-visible-toggle uk-navbar-item" tabIndex="0">
                                    <span uk-icon="icon: quote-right; ratio: 2.5"></span>
                                    <h2 className="uk-invisible-hover">
                                        Contact
                                </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Portfolio">
                                <div className="uk-visible-toggle uk-navbar-item" tabIndex="0">
                                    <span uk-icon="icon: users; ratio: 2.5"></span>
                                    <h2 className="uk-invisible-hover">
                                        Members
                                </h2>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Work">
                                <div className="uk-visible-toggle uk-navbar-item" tabIndex="0">
                                    <span uk-icon="icon: album; ratio: 2.5"></span>
                                    <h2 className="uk-invisible-hover">
                                        Projects
                                </h2>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
