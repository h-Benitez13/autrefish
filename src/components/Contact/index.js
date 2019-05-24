import React from "react";

const contactImg = {
  backgroundImage: 'url("Assets/Contact/scuba.png")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "inherit",
  backgroundPosition: " center",
  height: "800px"
};

export const Container = ({ children }) => {
  return (
    <div
      className="uk-container uk-container-large uk-panel uk-flex uk-height-small uk-position-relative"
      style={contactImg}
    >
      {children}
    </div>
  );
};

export const Input = ({ children }) => {
  return (
    <div className="uk-container uk-container-medium uk-position-medium uk-position-left uk-margin-large-top">
      <form
        className="uk-form-horizontal uk-grid-medium uk-card uk-card-large uk-card-secondary"
        uk-grid
      >
        {children}
      </form>
    </div>
  );
};
