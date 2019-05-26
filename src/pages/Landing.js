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
            className="uk-card uk-margin-left uk-flex "
            style={{ height: "500px" }}
            uk-scrollspy-class="uk-animation-scale-down"
          >
            <div
              className="container"
              style={{
                background: "url('Assets/Landing/pro1.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            >
              <div className="overlay">
                <div className="items" />
                <div className="items head">
                  <p>WOAH THIS WORKS</p>
                  <a
                    class="uk-button uk-button-default"
                    href="/Assets/Landing/autrefishlogo.png"
                    data-caption="Image"
                    uk-lightbox
                  >
                    Image
                  </a>
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
            className="uk-card uk-flex  uk-flex-right"
            style={{ height: "200px", width: "550px" }}
            uk-scrollspy-class="uk-animation-scale-down"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Landing/pro3.png')",
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
        {/* empty-card */}
        <div>
          <div
            className="uk-card uk-flex uk-flex-center uk-flex-middle"
            style={{ height: "200px", width: "350px" }}
          />
        </div>

        {/* second grid */}

        <div>
          <div
            className="uk-card uk-card-muted uk-flex  uk-flex-middle"
            style={{ height: "300px" }}
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Landing/pro2.jpg')",
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
            className="uk-card uk-flex uk-flex-center uk-flex-middle"
            style={{ height: "540px" }}
            uk-scrollspy-class="uk-animation-scale-down"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Landing/pro4.jpg')",
                backgroundSize: "cover",
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
            style={{ height: "260px", width: "450px" }}
            uk-scrollspy-class="uk-animation-scale-down"
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Landing/pro6.png')",
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
            style={{ width: "580px", height: "380px" }}
          >
            <div
              className="container"
              style={{
                backgroundImage: "url('Assets/Landing/pro5.png')",
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
      </CardContainer>
    </Layout>
  );
}
export default Landing;
