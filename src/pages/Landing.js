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
            className="uk-card  "
            style={{ height: "600px", width: "450px" }}
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
                  <p>nig.</p>
                  <hr />
                </div>

                <div className="items price">
                  <a
                    class="uk-button uk-button-secondary"
                    href="https://vimeo.com/338146747"
                    data-caption="Vimeo"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ display: "target-cell" }}
                  >
                    Vimeo
                  </a>
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
            className="uk-card  "
            style={{ height: "300px", width: "580px" }}
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
                  <p>BR–STOL at Coachella</p>
                  <hr />
                </div>

                <div className="items price">
                  <a
                    class="uk-button uk-button-secondary"
                    href="https://vimeo.com/332145760"
                    data-caption="Vimeo"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ display: "target-cell" }}
                  >
                    Vimeo
                  </a>
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
            className="uk-card uk-card-muted uk-flex "
            style={{ height: "500px", width: "850px" }}
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
                  <p>Cojo – Block Boy</p>
                  <hr />
                </div>

                <div className="items price">
                  <a
                    class="uk-button uk-button-secondary"
                    href="https://www.youtube.com/watch?v=Ot6cTte70p8"
                    data-caption="Youtube"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ display: "target-cell" }}
                  >
                    Youtube
                  </a>
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
            className="uk-card uk-card-muted uk-flex "
            style={{ height: "300px", width: "450px" }}
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
                  <p>BR–STOL Memorial Gym Memoir</p>
                  <hr />
                </div>

                <div className="items price">
                  <a
                    class="uk-button uk-button-secondary"
                    href="https://vimeo.com/329699071"
                    data-caption="Vimeo"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ display: "target-cell" }}
                  >
                    Vimeo
                  </a>
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
        {/* third grid */}

        <div>
          <div
            className="uk-card uk-flex "
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
                  <p>BR–STOL X New Era</p>
                  <hr />
                </div>

                <div className="items price">
                  <a
                    class="uk-button uk-button-secondary"
                    href="https://vimeo.com/325809855"
                    data-caption="Vimeo"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ display: "target-cell" }}
                  >
                    Vimeo
                  </a>
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
          <div className="uk-card" />
        </div>

        <div>
          <div className="uk-card uk-margin" style={{ height: "400px" }} />
        </div>

        <div>
          <div
            className="uk-card uk-card-muted "
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
                  <p>BR–STOL X NY Sunshine</p>
                  <hr />
                </div>

                <div className="items price">
                  <a
                    class="uk-button uk-button-secondary"
                    href="https://vimeo.com/325811367"
                    data-caption="Vimeo"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ display: "target-cell" }}
                  >
                    Vimeo
                  </a>
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
