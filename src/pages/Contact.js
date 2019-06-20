import React from "react";

function Contact() {
  return (
    <div id="contactPage" uk-offcanvas="mode: none;overlay: false;">
      <div
        className="uk-offcanvas-bar uk-animation-slide-right"
        style={{ minWidth: "100vw", backgroundColor: "white" }}
      >
        <button
          className="uk-button uk-position-top-left"
          type="button"
          style={{ color: "black", marginLeft: "10px" }}
        >
          <span
            className=" uk-offcanvas-close"
            uk-icon="icon: close; ratio: 1.5"
            style={{ color: "black" }}
          />
        </button>

        <div className="uk-container uk-container-small">
          <img
            src="/Assets/Landing/autrefishlogo.png"
            className="uk-position-center"
            alt="autrefish logo"
            style={{ width: "400px", height: "300px", marginTop: "-20px" }}
          />
          <a
            className="uk-position-bottom-center "
            href="mailto:weare@autrefish.com"
            style={{ marginBottom: "125px" }}
          >
            <button
              id="contactBttn"
              className=" uk-button uk-button-default uk-animation-slide-bottom "
            >
              Contact Us!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
