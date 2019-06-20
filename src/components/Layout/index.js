import React from "react";

import { Navbar } from "../Navbar";
import { NavContainer } from "../Container";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Bio from "../../pages/Bio";

function Layout({ children }) {
  return (
    <div>
      <NavContainer>
        <Navbar />
        <About />
        <Contact />
        <Bio />
      </NavContainer>

      {children}
    </div>
  );
}

export default Layout;
