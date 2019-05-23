import React from "react";

var aboutImg = {
  backgroundImage: 'url("Assets/About/top.gif")',
  backgroundPosition: "center left",
  backgroundSize: "initial",
  backgroundRepeat: "no-repeat",
  height: "560px",
  backgroundColor: "rgb(2,4,2)"
};

export const Container = ({ children }) => {
  return (
    <div
      className="uk-background-container uk-panel uk-flex uk-height-small uk-position-relative"
      style={aboutImg}
    >
      {children}
    </div>
  );
};

var gradColor = {
  backgroundImage: "linear-gradient(rgb(2,4,2), #04619F,#1E3B70, #2C3E50)"
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
