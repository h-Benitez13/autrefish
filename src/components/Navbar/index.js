import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav
        id="webNav"
        className="uk-navbar-container uk-margin-top uk-navbar-transparent "
        uk-sticky="animation: none;"
      >
        <div>
          <ul
            className="uk-flex-column uk-iconnav uk-dark "
            uk-scrollspy="cls: uk-animation-fade; target: > li ; delay: 300; repeat:false"
          >
            {/* About */}
            <li>
              <img
                src="/Assets/Landing/aboutSym.png"
                alt=" About page icon"
                uk-toggle="#aboutPage"
                width="40px"
                style={{ marginBottom: "35px" }}
              />
            </li>

            {/* Contact */}
            <li>
              <span
                uk-icon="icon: quote-right; ratio: 1.7"
                uk-toggle="#contactPage"
                style={{ marginBottom: "35px" }}
              />
            </li>

            {/* Instagram */}
            <li>
              <a
                style={{ display: "target-cell", marginBottom: "35px" }}
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

            {/* Personal Bios */}
            <li>
              <span uk-icon="icon: users; ratio: 1.7" uk-toggle="#bioPage" />
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
            <span uk-icon="icon: table; ratio: 1.5" uk-toggle="#my-id" />
          </div>

          <div id="my-id" uk-offcanvas="mode: none; overlay: false">
            <div className="uk-offcanvas-bar uk-animation-slide-left">
              <span
                className="uk-button uk-offcanvas-close"
                uk-icon="icon:close;ratio: 1.5"
              />

              <div className="uk-margin-large-top">
                <ul className="uk-dark uk-grid uk-flex uk-flex-column">
                  <li>
                    <h2 className="uk-heading-divider" uk-toggle="#aboutPage">
                      About
                    </h2>
                  </li>

                  <li>
                    <h2 className="uk-heading-divider" uk-toggle="#contactPage">
                      Contact
                    </h2>
                  </li>
                  <li>
                    <h2 className="uk-heading-divider" uk-toggle="#bioPage">
                      CoFounders
                    </h2>
                  </li>
                </ul>
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
