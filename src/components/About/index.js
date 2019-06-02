import React from "react";

var aboutImg = {
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

export const Info = ({ children }) => {
  return (
    <div className="uk-section uk-section-small uk-section-default ">
      {children}
    </div>
  );
};
