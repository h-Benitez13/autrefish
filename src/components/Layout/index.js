import React from "react";

import { Navbar } from "../Navbar";
import { NavContainer } from "../Container";

function Layout({ children }) {
  return (
    <div>
      <NavContainer>
        <Navbar />
      </NavContainer>
      {children}
    </div>
  );
}

export default Layout;
