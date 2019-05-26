import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="uk-section uk-section-default ">
      <div className="uk-container uk-container-small">{children}</div>
    </div>
  );
};

export const Input = ({ children }) => {
  return (
    <div className="uk-container uk-container-medium ">
      <div className="uk-card uk-card-small ">
        <form>{children}</form>
      </div>
    </div>
  );
};
