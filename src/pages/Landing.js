import React from "react";
import Layout from "../components/Layout";
import { CardContainer } from "../components/Container";

function Landing() {
  return (
    <Layout>
      <CardContainer>
        {/* first grid */}
        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-position-center uk-margin-bottom"
            style={{ height: "500px", width: "890px" }}
          >
            <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
              <img src="/Assets/Landing/pro2.jpg" alt="Cojo - Block boy" />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>Cojo - Block boy</h4>
              </div>
              <iframe
                className="uk-transition-fade uk-position-cover"
                title="youtube testing"
                width="890"
                height="500"
                src="https://www.youtube.com/embed/Ot6cTte70p8"
                frameBorder="0"
                allow=" autoplay; encrypted-media; "
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div>
          <div className="uk-card" style={{ height: "430px" }} />
        </div>

        {/* second grid */}

        <div>
          <div
            className="uk-card uk-card-muted uk-flex"
            style={{
              width: "445px",
              height: "235px",
              margin: "15px 0px 10px 150px"
            }}
          >
            <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
              <img src="/Assets/Landing/pro4.jpg" alt="BR-STOL x new era" />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>BR-STOL x New Era</h4>
              </div>

              <iframe
                title="vimeo- BR-STOL x new era"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/325809855?title=0&byline=0"
                width="445px"
                height="235"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className="uk-card uk-card-muted uk-flex"
            style={{
              width: "590px",
              height: "310px"
            }}
          >
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img src="/Assets/Landing/pro3.png" alt="BR-STOL at Coachella" />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>BR–STOL at Coachella</h4>
              </div>
              <iframe
                title="testingVimeo"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/332145760?title=0&byline=0&portrait=0"
                width="590"
                height="310"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        {/* third grid */}

        <div>
          <div
            className="uk-card uk-card-muted uk-flex"
            style={{
              width: "949px",
              height: "500px"
            }}
          >
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img src="/Assets/Landing/pro1.jpg" alt="nig." />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>nig.</h4>
              </div>

              <iframe
                title="vimeo - nig."
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/338146747?title=0&byline=0&portrait=0"
                width="949"
                height="500"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div className="uk-card" />
        </div>

        {/* fourth grid */}
        <div>
          <div
            className="uk-card uk-card-muted uk-flex"
            style={{
              width: "500px",
              height: "281px",
              margin: "30px 5px 5px 0px"
            }}
          >
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img src="/Assets/Landing/pro6.png" alt="BR-STOL Memoriam Gym" />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>BR-STOL Memoriam Gym</h4>
              </div>
              <iframe
                title="BR-STOL Memoriam Gym"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/329699071?title=0&byline=0&portrait=0"
                width="500"
                height="281"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex"
            style={{
              width: "712px",
              height: "400px"
            }}
          >
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img src="/Assets/Landing/pro5.png" alt="BR-STOL X NY Sunshine" />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>BR-STOL X NY Sunshine</h4>
              </div>

              <iframe
                title="BR-STOL X NY Sunshine"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/325811367?title=0&byline=0&portrait=0"
                width="712"
                height="400"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </CardContainer>
    </Layout>
  );
}
export default Landing;
