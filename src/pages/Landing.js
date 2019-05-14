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
                {/* first grid */}
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center"  uk-scrollspy-class="uk-animation-slide-top">
                        <div className="uk-media-center">
                            <img src="Assets/Card/cassets.jpeg" alt="" width="300px"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-flex uk-flex-center uk-flex-middle" style={{ "height": "300px", "backgroundImage": "url('Assets/Card/converse.jpeg')", "backgroundSize": "inherit", "backgroundRepeat": "repeat" }} uk-scrollspy-class="uk-animation-slide-bottom">
                        
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-slide-right">
                        <div className="uk-media-center">
                            <img src="Assets/Card/dogtown.jpeg" alt="" width="300px"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-scale-up">
                        <div className="uk-media-center">
                            <img src="Assets/Card/paak.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{"height": "300px"}}  > AutreFish</div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-scale-down">
                        <div className="uk-media-center">
                            <img src="Assets/Card/wonderer.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-slide-bottom">
                        <div className="uk-media-center">
                            <img src="Assets/Card/art.gif" alt="" width="300px" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-slide-top">
                        <div className="uk-media-center">
                            <img src="Assets/Card/sit.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-slide-right">
                        <div className="uk-media-center">
                            <img src="Assets/Card/gambino.gif" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-scale-up">
                        <div className="uk-media-center">
                            <img src="Assets/Card/disclosure.jpg" alt="" />
                        </div>
                    </div>
                </div>
            {/* second grid */}
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center"  uk-scrollspy-class="uk-animation-slide-top">
                        <div className="uk-media-center">
                            <img src="Assets/Card/vans.jpg" alt="" width="300px"/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-slide-right">
                        <div className="uk-media-center">
                            <img src="Assets/Card/lonely-game.gif" alt="" width="600px"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{"height":"300px","backgroundImage": "url('Assets/Card/space.gif')","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}  uk-scrollspy-class="uk-animation-scale-up">
                        <div className="uk-media-center">
                            <img src="Assets/Card/movement.gif" alt="" width="100px"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{"height": "300px"}}  >This is the middle</div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-scale-down">
                        <div className="uk-media-center">
                            <img src="Assets/Card/kawhi.jpg" alt="" width="400px" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-slide-bottom">
                        <div className="uk-media-center">
                            <img src="Assets/Card/records.jpg" alt="" width="500px" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  >
                        <div className="uk-media-center">
                            <img src="Assets/Card/work.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"  uk-scrollspy-class="uk-animation-slide-right">
                        <div className="uk-media-center">
                            <img src="Assets/Card/solange.gif" alt="" width="500px" />
                        </div>
                    </div>
                </div>
                
            </CardContainer>
        </div>
    )
}
export default Landing;