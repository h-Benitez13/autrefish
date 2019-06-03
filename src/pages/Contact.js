import React from "react";
import { Container, Input } from "../components/Contact";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <Container>
        <a className="uk-button" href="mailto:weare@autrefish.com">
          <img src="Assets/Landing/autrefishlogo.png" alt="autrefish logo" />
        </a>
        <h1
          className="uk-heading-large "
          uk-scrollspy="cls: uk-animation-fade; delay: 500; repeat: true"
        >
          Contact
        </h1>
        <Input>
          <div className=" uk-inline">
            <label className="uk-form-label ">
              <h4>First Name</h4>
            </label>

            <input
              id="form-stacked-first"
              className="uk-input uk-form-input-width-small uk-form-medium "
              type="text"
            />
          </div>

          <div className=" uk-inline uk-margin-left">
            <label className="uk-form-label ">
              <h4>Last Name</h4>
            </label>

            <input
              id="form-stacked-last"
              className="uk-input uk-form-input-width-medium uk-form-medium"
              type="text"
            />
          </div>

          <div className="uk-margin">
            <label className="uk-form-label ">
              <h4>Email</h4>
            </label>
            <input
              id="form-label-email"
              className="uk-input uk-form-input-width-1-3 uk-form-medium"
              type="email"
            />
          </div>

          <div>
            <label className="uk-form-label ">
              <h4>Subject</h4>
            </label>
            <input
              id="form-stacked-text"
              className="uk-input uk-form-input-width-medium uk-form-medium"
              type="text"
              placeholder="Project for Hire!"
            />
          </div>

          <div className="uk-margin">
            <label className="uk-form-label ">
              <h4>Message</h4>
            </label>
            <textarea
              className="uk-textarea"
              rows="5"
              placeholder="Hi! I loved the website and projects, would love to collab/hire AutreFish"
            />
          </div>

          <div className="uk-margin ">
            <a
              href="mailto:weare@autrefish.com"
              className="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-bottom"
            >
              Submit
            </a>
          </div>
        </Input>
      </Container>
    </Layout>
  );
}

export default Contact;
