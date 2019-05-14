import React from "react";
import { Navbar } from "../components/Navbar";
import { CardContainer, NavContainer } from "../components/Container";

function Landing() {
    return (
        <div>
            <NavContainer>
                <Navbar />
            </NavContainer>

            <CardContainer>
                <div>
                    <div className="uk-card uk-card-secondary uk-flex uk-flex-center" style={{ "height": "450px", "backgroundImage":"url('Assets/Card/cassets.jpeg')" }} uk-scrollspy-class="uk-animation-slide-top">
                        
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-secondary uk-flex uk-flex-center uk-flex-middle" style={{ "height": "230px" }} uk-scrollspy-class="uk-animation-slide-bottom">
                        <div className="uk-media-center">
                            <img src="Assets/Card/converse.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-primary uk-flex uk-flex-center uk-flex-middle" style={{ "height": "450px" }} uk-scrollspy-class="uk-animation-slide-right">
                        <div className="uk-media-center">
                            <img src="Assets/Card/dogtown.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-primary uk-flex uk-flex-center uk-flex-middle" style={{ "height": "600px" }} uk-scrollspy-class="uk-animation-scale-up">
                        <div className="uk-media-center">
                            <img src="Assets/Card/paak.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-secondary uk-flex uk-flex-center uk-flex-middle" style={{ "height": "320px" }} >This is the middle</div>
                </div>
                <div>
                    <div className="uk-card uk-card-secondary uk-flex uk-flex-center uk-flex-middle" style={{ "height": "270px" }} uk-scrollspy-class="uk-animation-scale-down">
                        <div className="uk-media-center">
                            <img src="Assets/Card/wonderer.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-primary uk-flex uk-flex-center uk-flex-middle" style={{ "height": "400px" }} uk-scrollspy-class="uk-animation-slide-bottom">
                        <div className="uk-media-center">
                            <img src="Assets/Card/cassets.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-secondary uk-flex uk-flex-center uk-flex-middle" style={{ "height": "200px" }} uk-scrollspy-class="uk-animation-slide-top">
                        <div className="uk-media-center">
                            <img src="Assets/Card/cassets.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-primary uk-flex uk-flex-center uk-flex-middle" style={{ "height": "140px" }} uk-scrollspy-class="uk-animation-slide-right">
                        <div className="uk-media-center">
                            <img src="Assets/Card/cassets.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    )
}
export default Landing;