import React from "react";
import Layout from "../components/Layout";
import { CardContainer } from "../components/Container";

function Landing() {
  return (
    <Layout>
      <CardContainer>
        {/* first grid */}

        <div>
          <div
            id="card"
            className="uk-card  "
            style={{ height: "600px", width: "450px" }}
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
                  <p className="old" />
                  <p className="new" />
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card  "
            style={{ height: "300px", width: "580px" }}
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
                  <p className="old" />
                  <p className="new" />
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span />
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
                  <p className="old" />
                  <p className="new" />
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="uk-card uk-card-muted uk-flex "
            style={{ height: "300px", width: "450px" }}
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
                  <p className="old" />
                  <p className="new" />
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third grid */}

        <div>
          <div className="uk-card uk-flex " style={{ height: "540px" }}>
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
                  <p className="old" />
                  <p className="new" />
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blank cards for grid */}
        <div>
          <div id="blankCard" className="uk-card" />
        </div>

        <div>
          <div
            id="blankCard"
            className="uk-card uk-margin"
            style={{ height: "400px" }}
          />
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
                  <p className="old" />
                  <p className="new" />
                </div>
                <div className="items cart">
                  <i className="fa fa-shopping-cart" />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* video testing */}

        <div>
          <div className="uk-card uk-card-muted">
            <div className="uk-inline-clip uk-transition-toggle" tabindex="0">
              <img src="/Assets/Landing/pro2.jpg" alt="project 2" />
              <iframe
                className="uk-transition-fade uk-position-cover"
                title="youtube testing"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ot6cTte70p8"
                frameBorder="0"
                allow=" autoplay; encrypted-media; "
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-muted uk-flex ">
            <iframe
              className="container"
              title="youtube testing"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ot6cTte70p8"
              frameBorder="0"
              allow=" autoplay; encrypted-media; "
              allowFullScreen
            />
            <div className="overTest">
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
                <p className="old" />
                <p className="new" />
              </div>
              <div className="items cart">
                <i className="fa fa-shopping-cart" />
                <span />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="uk-card">
              <iframe
                title="testing vimeo video on page"
                src="https://player.vimeo.com/video/329699071?title=0&byline=0&portrait=0"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </CardContainer>
    </Layout>
  );
}
export default Landing;
