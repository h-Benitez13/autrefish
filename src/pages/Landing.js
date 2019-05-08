import React from "react";
import {Navbar} from "../components/Navbar";
import { Container} from "../components/Container";

function Landing() {
    return(
        <Container>
            <Navbar />
            <div className="uk-container uk-position-center">
                <h1 className="uk-heading-large uk-light" uk-scrollspy="cls: uk-animation-slide-left; delay: 800; repeat: true">
                    Autre
                </h1>
                <h1 className="uk-heading-large uk-light" uk-scrollspy="cls: uk-animation-slide-right; delay: 800; repeat: true">
                    Fish
                </h1>
            </div>
        </Container>          
    )
}
export default Landing;