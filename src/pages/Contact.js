import React from "react";
import { Container, Input } from "../components/Contact";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <Container>
        <div className="uk-container uk-position-small uk-position-center-right">
          <h1
            className="uk-heading-large uk-light"
            uk-scrollspy="cls: uk-animation-fade; delay: 500; repeat: true"
          >
            Contact
          </h1>
        </div>
      </Container>
      <Input>
        {/* first name */}
        <div className="uk-margin-top">
          <div className=" uk-inline">
            <label className="uk-form-label uk-light" for="form-stacked-first">
              <h3>First Name</h3>
            </label>

            <input
              id="form-stacked-first"
              className="uk-input uk-form-input-width-1-2 uk-form-large uk-form-blank uk-margin-right"
              type="text"
            />
          </div>
          {/* last name */}
          <div className=" uk-inline">
            <label className="uk-form-label uk-light" for="form-stacked-last">
              <h3>Last Name</h3>
            </label>

            <input
              id="form-stacked-last"
              className="uk-input uk-form-input-width-1-2 uk-form-large uk-form-blank"
              type="text"
            />
          </div>
        </div>
        {/* email */}
        <div className="uk-margin-medium">
          <label className="uk-form-label uk-light" for="form-label-email">
            <h3>Email</h3>
          </label>
          <input
            className="uk-input uk-form-input-width-1-2 uk-form-large uk-form-blank"
            type="email"
          />
        </div>
        {/* subject */}
        <div className="uk-margin">
          <label className="uk-form-label uk-light" for="form-stacked-text">
            <h3>Subject</h3>
          </label>
          <input
            className="uk-input uk-form-input-width-1-2 uk-form-large uk-form-blank"
            type="text"
            placeholder="Project for Hire!"
          />
        </div>
        {/* text-area */}
        <div className="uk-margin">
          <lable className="uk-form-label uk-light" for="uk-textarea">
            <h3>Message</h3>
          </lable>
          <textarea
            className="uk-textarea uk-form-blank"
            rows="5"
            placeholder="Hi! I loved the website and projects, would love to collab/hire AutreFish"
          />
        </div>
        {/* submit button */}
        <div className="uk-margin ">
          <button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom uk-light">
            Button
          </button>
        </div>
      </Input>
    </Layout>
  );
}

export default Contact;
