import React from "react";

var aboutImg = {
  height: "400px",
  backgroundColor: "eggwhite"
};

export const Container = ({ children }) => {
  return (
    <div
      className="uk-section uk-section-small uk-panel uk-flex uk-height-small uk-position-relative"
      style={aboutImg}
    >
      {children}
    </div>
  );
};

var gradColor = {
  backgroundImage: "linear-gradient(white, #04619F,#1E3B70, #2C3E50)"
};
export const Info = ({ children }) => {
  return (
    <div
      className="uk-section uk-section-small uk-section-default "
      style={gradColor}
    >
      {children}
    </div>
  );
};
