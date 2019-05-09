import React from "react";
import { Container, Input } from "../components/Contact";
import { Navbar } from "../components/Navbar";

function Contact() {
    return (
        <div>
            <Container>
                <Navbar />
                <div className="uk-container uk-position-small uk-position-center-left">
                    <h1 className="uk-heading-large uk-light" uk-scrollspy="cls: uk-animation-fade; delay: 500; repeat: true">
                        Contact
                        </h1>
                </div>
                <Input>
                <div className="uk-margin">
                    <div className=" uk-inline">
                        <span className="uk-form-icon uk-light" uk-icon="icon: user; ratio: 3.5"></span>
                        <input className="uk-input uk-form-input-width-1-2 uk-form-large uk-form-blank" type="text" placeholder="First name"/>
                    </div>
                </div>
                <div className="uk-margin">
                    <div className=" uk-inline">
                        <span className="uk-form-icon uk-light" uk-icon="icon: user; ratio: 3.5"></span>
                        <input className="uk-input uk-form-blank" type="text" />
                    </div>
                </div>
                <div className="uk-margin">
                    <div className=" uk-inline">
                        <span className="uk-form-icon uk-light" uk-icon="icon: user; ratio: 3.5"></span>
                        <input className="uk-input uk-form-blank" type="text" />
                    </div>
                </div>
                    
                </Input>
            </Container>

        </div>
    )

}

export default Contact;