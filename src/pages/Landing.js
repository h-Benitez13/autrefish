import React from "react";
import Layout from "../components/Layout";
import { CardContainer } from "../components/Container";

function Landing() {
    return (
        
            <Layout>

            <CardContainer>
                {/* first grid */}
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center " style={{ "height": "350px","width":"440px" }} uk-scrollspy-class="uk-animation-slide-top">
                        <div className="container" style={{ "background": "url('Assets/Card/cassets.jpeg')","backgroundRepeat":"no-repeat","backgroundSize":"cover" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <div className="uk-card uk-flex uk-flex-center uk-flex-middle" style={{ "height": "300px" }} uk-scrollspy-class="uk-animation-slide-bottom">
                        <div className="container" style={{ "background": "url('Assets/Card/converse.jpeg')" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "height": "600px", "width": "650px" }} uk-scrollspy-class="uk-animation-slide-right">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/jay.jpg')", "backgroundSize": "cover", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "height": "700px" }} uk-scrollspy-class="uk-animation-scale-up">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/paak.jpg')", "backgroundSize": "cover", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "height": "300px" }}  > AutreFish</div>
                </div>


                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "width": "240px", "height": "320px" }} uk-scrollspy-class="uk-animation-scale-down">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/wander.jpg')", "backgroundSize": "inherit", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "height": "250px", "width": "500px" }} uk-scrollspy-class="uk-animation-slide-bottom">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/art.gif')", "backgroundSize": "inherit", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "width": "480px", "height": "480px" }} uk-scrollspy-class="uk-animation-slide-top">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/sit.jpg')", "backgroundSize": "inherit", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "height": "470px", "width": "270px" }} uk-scrollspy-class="uk-animation-slide-right">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/gambino.gif')", "backgroundSize": "inherit", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "height": "430px", "width": "420px" }} uk-scrollspy-class="uk-animation-scale-up">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/disclosure.jpg')", "backgroundSize": "inherit", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second grid */}
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center" style={{ "height": "650px", "width": "530px" }} uk-scrollspy-class="uk-animation-slide-top">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/vans.gif')", "backgroundSize": "initial", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle uk-margin-right" style={{ "height": "500px" }} uk-scrollspy-class="uk-animation-slide-right">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/lonely-game.gif')", "backgroundSize": "initial", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "height": "300px", "backgroundImage": "url('Assets/Card/space.gif')", "backgroundSize": "cover", "backgroundRepeat": "no-repeat" }} uk-scrollspy-class="uk-animation-scale-up">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/movement.gif')", "backgroundSize": "initial", "backgroundRepeat": "no-repeat", "backgroundPosition": "center center" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* other possible title */}
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "height": "300px" }}  >This is the middle</div>
                </div>


                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "height": "240px", "width": "360px" }} uk-scrollspy-class="uk-animation-scale-down">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/kawhi.jpg')", "backgroundSize": "cover", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{ "height": "800px", "width": "700px" }} uk-scrollspy-class="uk-animation-slide-bottom">
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/records.jpg')", "backgroundSize": "cover", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{"height":"500px"}} >
                        <div className="container" style={{ "backgroundImage": "url('Assets/Card/work.jpg')", "backgroundSize": "cover", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle" style={{"height":"500px","width":"500px"}} uk-scrollspy-class="uk-animation-slide-right">
                    <div className="container" style={{ "backgroundImage": "url('Assets/Card/solange.gif')", "backgroundSize": "contain", "backgroundRepeat": "no-repeat" }}>
                            <div className="overlay">
                                <div className="items"></div>
                                <div className="items head">
                                    <p>WOAH THIS WORKS</p>
                                    <hr />
                                </div>

                                <div className="items price">
                                    <p className="old">start</p>
                                    <p className="new">work</p>
                                </div>
                                <div className="items cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>BOOK US!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </CardContainer>
        </Layout>
    )
}
export default Landing;