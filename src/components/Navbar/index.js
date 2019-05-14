import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="uk-position-top">
            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar uk-sticky="animation: uk-animation-slide-top">
                <div className="uk-flex uk-flex-center">
                    <ul className="uk-navbar-nav uk-dark" uk-scrollspy="cls: uk-animation-fade; target: > li ; delay: 300; repeat:true" >
                        <li className="uk-active">
                            <Link to="/Home">
                                <div>
                                    <span uk-icon="icon: home; ratio: 2.5"></span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">
                                <span uk-icon="icon: info; ratio: 2.5"></span>
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/">
                                <span uk-icon="icon: instagram; ratio: 2.5"></span>
                            </a>
                        </li>
                        <li>
                            <Link to="/Contact">
                                <span uk-icon="icon: quote-right; ratio: 2.5"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Portfolio">
                                <span uk-icon="icon: users; ratio: 2.5"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Work">
                                <span uk-icon="icon: album; ratio: 2.5"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
