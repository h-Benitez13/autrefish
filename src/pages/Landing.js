import React from "react";
import Layout from "../components/Layout";
import { CardContainer } from "../components/Container";
// import Slider from "react-slick";

// var settings = {
//   dots: false,
//   fade: true,
//   centerMode: true,
//   infinite: false,
//   autoplay: true,
//   autoplaySpeed: 1000,
//   speed: 1000,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };

function Landing() {
  return (
    <Layout>
      {/* <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
      <CardContainer>
        {/* first grid */}
        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center "
            style={{ height: "450px", width: "340px", marginLeft: "10px" }}
            uk-scrollspy-class="uk-animation-slide-top"
          >
            <div
              className="container"
              style={{
                background: "url('Assets/Card/cassets.jpeg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-flex  uk-flex-middle"
            style={{ height: "300px", width: "450px" }}
            uk-scrollspy-class="uk-animation-slide-bottom"
          >
            <div
              className="container"
              style={{ background: "url('Assets/Card/converse.jpeg')" }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{ height: "400px", width: "450px" }}
            uk-scrollspy-class="uk-animation-slide-right"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/jay.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex  uk-flex-middle"
            style={{ height: "500px" }}
            uk-scrollspy-class="uk-animation-scale-up"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/paak.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{ height: "300px" }}
          >
            {" "}
            AutreFish
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{ width: "240px", height: "320px", marginLeft: "30px" }}
            uk-scrollspy-class="uk-animation-scale-down"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/wander.jpg')",
                backgroundSize: "inherit",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{ height: "260px", width: "350px", marginLeft: "20px" }}
            uk-scrollspy-class="uk-animation-slide-bottom"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/art.gif')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{ width: "480px", height: "480px" }}
            uk-scrollspy-class="uk-animation-slide-top"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/sit.jpg')",
                backgroundSize: "inherit",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{ height: "470px", width: "270px", marginLeft: "50px" }}
            uk-scrollspy-class="uk-animation-slide-right"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/gambino.gif')",
                backgroundSize: "inherit",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{ height: "430px", width: "420px", marginLeft: "15px" }}
            uk-scrollspy-class="uk-animation-scale-up"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/disclosure.jpg')",
                backgroundSize: "inherit",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second grid */}
        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center"
            style={{ height: "650px", width: "530px" }}
            uk-scrollspy-class="uk-animation-slide-top"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/vans.gif')",
                backgroundSize: "initial",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle uk-margin-right"
            style={{ height: "500px", width: "350px", marginLeft: "50px" }}
            uk-scrollspy-class="uk-animation-slide-right"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/lonely-game.gif')",
                backgroundSize: "inherit",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{
              height: "300px",
              backgroundImage: "url('Assets/Card/space.gif')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
            uk-scrollspy-class="uk-animation-scale-up"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/movement.gif')",
                backgroundSize: "initial",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* other possible title */}
        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{ height: "300px" }}
          >
            This is the middle
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{
              height: "240px",
              width: "360px",
              margin: "20px 0px 0px 20px"
            }}
            uk-scrollspy-class="uk-animation-scale-down"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/kawhi.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{ height: "500px", width: "400px" }}
            uk-scrollspy-class="uk-animation-slide-bottom"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/records.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{ height: "350px", width: "500px" }}
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/work.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex uk-flex-center uk-flex-middle"
            style={{
              height: "400px",
              width: "400px",
              margin: "0px 0px 0px 30px"
            }}
            uk-scrollspy-class="uk-animation-slide-right"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Card/solange.gif')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <hr />
                </div>

                <div className="items price">
                  <p className="old">start</p>
                  <p className="new">work</p>
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span>BOOK US!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContainer>
    </Layout>
  );
}
export default Landing;
