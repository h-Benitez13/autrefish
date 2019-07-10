import React from "react";
import Layout from "../components/Layout";
import { CardContainer } from "../components/Container";

function Landing() {
  return (
    <div>
      <Layout />
      <CardContainer>
        {/* Grid: adidas and blank */}
        <div>
          <div id="card1" className="uk-card uk-position-center">
            <div className="uk-inline-clip uk-transition-toggle " tabIndex="0">
              <img
                id="adidas"
                src="/Assets/Landing/adidas.jpeg"
                alt="BR-STOL x Adidas SS19"
              />
              <div className="uk-overlay uk-light uk-position-top" />
              <iframe
                title="BR–STOL x Adidas SS19"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/344886689?title=0&byline=0&portrait=0"
                width="900"
                height="474"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div id="blankCard" className="uk-card" style={{ height: "600px" }} />
        </div>

        {/* Grid: new era & Coachella */}
        <div>
          <div id="card2" className="uk-card ">
            <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
              <img
                id="new"
                src="/Assets/Landing/pro4.jpeg"
                alt="BR-STOL x new era"
              />
              <div className="uk-overlay uk-light uk-position-top" />

              <iframe
                id="newEra"
                title="vimeo- BR-STOL x new era"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/325809855?title=0&byline=0&portrait=0"
                width="664"
                height="350"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div id="card3" className="uk-card ">
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img src="/Assets/Landing/pro3.png" alt="BR-STOL at Coachella" />
              <div className="uk-overlay uk-light uk-position-top" />
              <iframe
                id="coachella"
                title="BR-STOL at Coachella"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/332145760?title=0&byline=0&portrait=0"
                width="400"
                height="211"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Grid: cojo & blank */}

        <div>
          <div id="card4" className="uk-card  ">
            <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
              <img
                id="cojo"
                src="/Assets/Landing/pro2.jpg"
                alt="Cojo - Block boy"
              />
              <div className="uk-overlay uk-light uk-position-top" />

              <iframe
                className="uk-transition-fade uk-position-cover"
                id="youtubeVid"
                title="youtube testing"
                src="https://player.vimeo.com/video/338308500?title=0&byline=0&portrait=0"
                width="890"
                height="469"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div id="blankCard" className="uk-card" />
        </div>

        {/* Grid: NY sunshine & Memoriam Gym */}
        <div>
          <div id="card5" className="uk-card  ">
            <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
              <img
                id="sunshine"
                src="/Assets/Landing/pro5.png"
                alt="BR-STOL X NY Sunshine"
              />
              <div className="uk-overlay uk-light uk-position-top" />

              <iframe
                id="NY"
                title="BR-STOL X NY Sunshine"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/325811367?title=0&byline=0&portrait=0"
                width="464"
                height="271"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div>
          <div id="card6" className="uk-card ">
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img
                id="MemGym"
                src="/Assets/Landing/pro6.png"
                alt="BR-STOL Memoriam Gym"
              />
              <div className="uk-overlay uk-light uk-position-top" />
              <iframe
                id="gym"
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

        {/* Grid: nig. */}

        <div>
          <div id="card7" className="uk-card ">
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img id="nig" src="/Assets/Landing/pro1.jpeg" alt="nig." />
              <div className="uk-overlay uk-light uk-position-top" />

              <iframe
                id="nigVid"
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
      </CardContainer>
    </div>
  );
}
export default Landing;
