import React from "react";

function Bio() {
  return (
    <div id="bioPage" uk-offcanvas="mode:slide; ">
      <div
        className="uk-offcanvas-bar uk-animation-slide-left"
        style={{
          backgroundImage: "linear-gradient(to top, #bdcad9 0%, #e1dada 74%)"
        }}
      >
        <div className="uk-container uk-container-small">
          <span
            className="uk-button uk-offcanvas-close"
            uk-icon="icon:close;ratio: 1.5"
            style={{ color: "black" }}
          />
          {/* Alex Ford: cofounder */}

          <article className="uk-comment">
            <header
              className="uk-comment-header uk-grid-medium uk-flex-middle"
              uk-grid
            >
              <div className="uk-width-auto">
                <img
                  className="uk-comment-avatar uk-border-circle"
                  src="/Assets/Landing/alexford.jpg"
                  width="80"
                  height="80"
                  alt="Alex Ford"
                />
              </div>
              <div className="uk-width-expand" />
            </header>
            <div className="uk-comment-body " style={{ color: "black" }}>
              <p>
                Co-founder of autre fish, Alex Ford graduated from Princeton
                University in 2017 with a degree in Sociology, and he is
                pursuing an MFA in film and television production at the
                University of Southern California. Having worked as a production
                assistant for Steven Spielberg during his college year and a
                year thereafter, Alex realized limiting himself to work in
                feature films was too restricting. Alex is on a storytelling
                journey. He plans to reach every industry imaginable using
                video, design and all forms of digital media to create
                transformative visual content that affects the social fabric of
                our world.
              </p>
            </div>
          </article>

          {/* Joshua Ciccel: cofounder */}
          <article className="uk-comment">
            <header
              className="uk-comment-header uk-grid-medium uk-flex-middle"
              uk-grid
            >
              <div className="uk-width-auto">
                <img
                  className="uk-comment-avatar uk-border-circle"
                  src="/Assets/Landing/jciccel.jpg"
                  width="80"
                  height="80"
                  alt="Joshua Ciccel"
                />
              </div>
              <div className="uk-width-expand" />
            </header>
            <div className="uk-comment-body " style={{ color: "black" }}>
              <p>
                Co-founder of autre fish, Joshua Ciccel graduated from Syracuse
                University with a degree in Visual & Performing Arts and is
                pursuing an MFA in film at the University of Southernn
                California. Born in Los Angeles, the world’s mecca of creative
                pursuit, Joshua guides his career to question the present rather
                than surrender to the cyclical normality of this generation.
                Using various mediums to understand concepts surrounding space,
                time, image, sound and movement, Joshua strives to walk an
                empathic journey to inspire and to lead (whomever).
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Bio;
