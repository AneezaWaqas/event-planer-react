import React from "react";
import catering from "../../assets/images/catering.jpg";
import photography from "../../assets/images/photography.jpg";
import decor from "../../assets/images/decor.jpg";
import birthday from "../../assets/images/birthday.jpg";
import wedding from "../../assets/images/wedding.jpg";
import event from "../../assets/images/event.jpg";
import video1 from "../../assets/images/one.mp4";
import Footer from "../Footer";
function Gallary(props) {
  return (
    <>
      <div className="container-lg gallary-custom">
        <div className="row">
          <div className="gallaryHeading">
            <div className="col-md-12 p-5">
              <h1 className="text-center">Gallary</h1>
            </div>
          </div>
        </div>
        <div className="row py-4">
          <div
            className="col-md-4 col-sm-12"
            onClick={() => props.history.push("/catering_gallary")}
          >
            <div className="cards-custom ">
              <div class="card img-hover-zoom">
                {/* <div class=""> */}
                <img
                  className="card-img-top img-fluid"
                  src={catering}
                  alt="Card image cap"
                />
                <div class="overlay">
                  <div class="text">Catering</div>
                </div>
                {/* </div> */}
                <div className="card-body">
                  <p className="card-text bold">Catering</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-12"
            onClick={() => props.history.push("/photography_gallary")}
          >
            <div className="cards-custom">
              <div class="card img-hover-zoom">
                <img
                  className="card-img-top img-fluid"
                  src={photography}
                  alt="Card image cap"
                />
                <div class="overlay">
                  <div class="text">Photography</div>
                </div>
                <div className="card-body">
                  <p className="card-text bold">Photography</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-12"
            onClick={() => props.history.push("/decor_gallary")}
          >
            <div className="cards-custom">
              <div class="card img-hover-zoom">
                <img
                  className="card-img-top img-fluid"
                  src={decor}
                  alt="Card image cap"
                />
                <div class="overlay">
                  <div class="text">Decor</div>
                </div>
                <div className="card-body">
                  <p className="card-text bold">Decor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-4">
          <div
            className="col-md-4 col-sm-12"
            onClick={() => props.history.push("/wedding_gallary")}
          >
            <div className="cards-custom">
              <div class="card img-hover-zoom">
                <img
                  className="card-img-top img-fluid"
                  src={wedding}
                  alt="Card image cap"
                />
                <div class="overlay">
                  <div class="text">Wedding</div>
                </div>
                <div className="card-body">
                  <p className="card-text bold">Wedding</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-12"
            onClick={() => props.history.push("/event_gallary")}
          >
            <div className="cards-custom">
              <div class="card img-hover-zoom">
                <img
                  className="card-img-top img-fluid"
                  src={event}
                  alt="Card image cap"
                />
                <div class="overlay">
                  <div class="text">Event</div>
                </div>
                <div className="card-body">
                  <p className="card-text bold">Event</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-12"
            onClick={() => props.history.push("/birthday_gallary")}
          >
            <div className="cards-custom">
              <div class="card img-hover-zoom">
                <img
                  className="card-img-top img-fluid"
                  src={birthday}
                  alt="Card image cap"
                />
                <div class="overlay">
                  <div class="text">Birthday</div>
                </div>
                <div className="card-body">
                  <p className="card-text bold">Birthday</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div
              className="col-md-4 col-sm-12"
              onClick={() => props.history.push("/birthday_gallary")}
            >
              <div className="cards-custom">
                <div class="card img-hover-zoom">
                  <video width="430" height="240" controls>
                    <source src={video1} type="video/mp4" />
                    {/* <source src="movie.ogg" type="video/ogg" /> */}
                    Your browser does not support the video tag.
                  </video>
                  <div class="overlay">
                    <div class="text">Videos</div>
                  </div>
                  <div className="card-body">
                    <p className="card-text bold">Videos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallary;
