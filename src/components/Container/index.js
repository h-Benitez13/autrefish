import React from "react";

export const NavContainer = ({ children }) => {
  return <div className="uk-container uk-container-large ">{children}</div>;
};

export const CardContainer = ({ children }) => {
  return (
    <div className="uk-section uk-section-default uk-section-small">
      <div className="uk-container uk-container-medium">
        <div
          className="uk-grid-collapse uk-child-width-1-2@s uk-child-width-1-2@m "
          uk-grid="masonry: true"
          uk-scrollspy="target: div> .uk-card;cls: uk-animation-fade; delay: 500; repeat: false"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
