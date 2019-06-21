import React from "react";

function About() {
  return (
    <div id="aboutPage" uk-offcanvas="mode: none;overlay: false">
      <div
        className="uk-offcanvas-bar uk-animation-slide-left"
        style={{
          minWidth: "35vw",
          backgroundImage:
            "linear-gradient(to left,#ffffff 0% , #ffffff 0%, #d7e1ec 74%)"
        }}
      >
        <span
          className="uk-button uk-offcanvas-close"
          uk-icon="icon: close; ratio: 1.5"
          style={{ color: "black" }}
        />

        <h1
          className="uk-heading-large uk-heading-primary uk-text-center"
          style={{ color: "black" }}
        >
          autre fish
        </h1>
        <h5 style={{ color: "black" }}>
          People often advise against falling in love with another’s potential,
          for focusing on those ideals can result in perpetual dissatisfaction.
          Well, our seemingly chimeric belief in the world’s potential is not
          only what drives us, but what has brought us together as autre fish.
          Like many people, the two of us have experienced a number of emotions
          over the years that caused us to embark on artistic journeys drenched
          in solitude. In our singleness, we strived to operate with a
          glass-half-full mentality, but only after truly collaborating did we
          discover our glasses could overflow. A true connection was born from
          our belief in the potential for a world full of love, community and
          kindness at every corner.
        </h5>
        <h5 style={{ color: "black" }}>
          Our growth will never cease as we strive to forever reimagine how we
          interact, create and digest visual content. To autre fish, art is an
          opportunity to synthesize different forms of expression in order to a
          build community that understands art as a sensory experience. Owning
          space in the digital plain as well as in the physical world, autre
          fish is a beacon of active community engagement, providing innovative
          perspectives leading the world by example. We are here to push the
          boundaries of creative content and challenge both ourselves and the
          world around us to maximize our potential.
        </h5>
      </div>
    </div>
  );
}
export default About;
