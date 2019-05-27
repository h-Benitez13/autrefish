import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="uk-background-cover uk-panel uk-flex uk-height-large uk-position-relative">
      {children}
    </div>
  );
};

export const NavContainer = ({ children }) => {
  return (
    <div className="uk-container uk-container-large uk-margin-large-bottom">
      {children}
    </div>
  );
};

export const CardContainer = ({ children }) => {
  return (
    <div className="uk-section uk-section-default uk-section-small">
      <div className="uk-container uk-container-small">
        <div
          className="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m"
          uk-grid="masonry: true"
          uk-scrollspy="target: div> .uk-card;cls: uk-animation-fade; delay: 500; repeat: false"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
