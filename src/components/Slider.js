import React from "react";
import sliderOne from "../assets/images/slider1.jpg";
import sliderTwo from "../assets/images/slider_2.jpg";
import sliderThree from "../assets/images/slider_3.jpg";
function Slider() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide sliderContainer"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators silderText">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={sliderTwo} className="d-block w-100" alt="..." />

            <div className="carousel-caption d-none d-md-block silderText">
              <h1>Welcome to Event<br/> Planners</h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={sliderOne} className="d-block w-100" alt="..." />

            <div className="carousel-caption d-none d-md-block silderText">
              <h1>Welcome to Event<br/> Planners</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={sliderThree} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block silderText">
              <h1>Welcome to Event<br/> Planners</h1>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon sliderIcon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon sliderIcon"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
