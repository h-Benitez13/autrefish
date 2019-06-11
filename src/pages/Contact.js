import React from "react";
import { Container } from "../components/Contact";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <Container>
        <img
          className="uk-position-center "
          src="/Assets/Landing/autrefishlogo.png"
          alt="autrefish logo"
          style={{ width: "400px", height: "300px" }}
        />
        <a href="mailto:weare@autrefish.com">
          <button
            id="contactBttn"
            className="uk-position-bottom-center uk-button uk-button-default uk-animation-fade "
            style={{ marginBottom: "100px" }}
          >
            Contact Us!
          </button>
        </a>
      </Container>
    </Layout>
  );
}

export default Contact;
