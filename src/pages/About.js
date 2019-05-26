import React from "react";
import { Container, Info } from "../components/About";
import { Navbar } from "../components/Navbar";

function About() {
  return (
    <div>
      <Container>
        <Navbar />
        <div className="uk-container uk-position-small uk-position-center">
          <h1
            className="uk-heading-large uk-dark"
            uk-scrollspy="cls: uk-animation-slide-bottom; delay: 800; repeat: true"
          >
            AutreFish
          </h1>
        </div>
      </Container>
      <Info>
        <div className=" uk-container uk-container-small ">
          <div
            className="uk-card uk-card-large"
            style={{ background: "transparent" }}
          >
            <article className="uk-article">
              <div className="uk-card-title" />

              <div className="uk-card-body">
                <p className="uk-text-lead " style={{ color: "black" }}>
                  Mission, Objective, Who are we?{" "}
                </p>

                <p style={{ color: "black" }}>
                  People often advise against falling in love with another’s
                  potential, for focusing on those ideals can result in
                  perpetual dissatisfaction. Well, our seemingly chimeric belief
                  in the world’s potential is not only what drives us, but what
                  has brought us together as autre fish. Like many people, the
                  two of us have experienced a number of emotions over the years
                  that caused us to embark on artistic journeys drenched in
                  solitude. In our singleness, we strived to operate with a
                  glass-half-full mentality, but only after truly collaborating
                  did we discover our glasses could overflow. A true connection
                  was born from our belief in the potential for a world full of
                  love, community and kindness at every corner.
                </p>
                <p style={{ color: "black" }}>
                  Our growth will never cease as we strive to forever reimagine
                  how we interact, create and digest visual content. To autre
                  fish, art is an opportunity to synthesize different forms of
                  expression in order to build community that understands art as
                  a sensory experience. Owning space in the digital plain as
                  well as in the physical world, autre fish is a beacon of
                  active community engagement, providing innovative perspectives
                  leading the world by example. We are here to push the
                  boundaries of creative content and challenge both ourselves
                  and the world around us to maximize our potential.
                </p>
              </div>
            </article>
          </div>
        </div>
      </Info>
    </div>
  );
}

export default About;
