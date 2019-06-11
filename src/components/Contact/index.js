import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="uk-section uk-section-small" style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
};
