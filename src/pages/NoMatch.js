import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div id="noMatch">
      <div className="uk-container uk-position-center uk-text-center">
        <h1 className="uk-heading-primary uk-light ">404 Page Not Found</h1>
        <img
          src="/Assets/Landing/crazy_lucky.jpg"
          alt="Lucky"
          width="300px"
          style={{ borderRadius: "10px" }}
        />

        <h3 className=" uk-light">
          Everybody makes mistakes (everybody has those days). Click{" "}
          <Link to="/">here</Link> to head back!
        </h3>
      </div>
    </div>
  );
}

export default NoMatch;
