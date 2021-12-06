import React from "react";
import leftImage from '../assets/images/leftHomeImage.jpg'
import rightImage from '../assets/images/rightHomeImage.jpg'
import Footer from "./Footer";

function About() {
  return (
    <>
        <div className="container-fluid aboutUs">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="aboutHeading">

            <h1>About Us</h1>
              </div>

            </div>
          </div>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div></div>
              <div className="leftHomeImageAbout">

              <img src={leftImage} alt="Left Image" />
              </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="abotText text-center">
             
              <p>
                Event planners are known for impeccable planning and artistry.
                It has earned great praise from the media, the wedding industry
                and from clients for their perfection in work and making every
                moment worth living.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 mb-5">
          <div className="rightHomeImageAbout">

<img src={rightImage} alt="Right Image" />
</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
