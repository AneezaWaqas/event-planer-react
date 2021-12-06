import React from "react";
import Slider from "./Slider";
import leftImage from "../assets/images/leftHomeImage.jpg";
import rightImage from "../assets/images/rightHomeImage.jpg";

import birthday from "../assets/images/birthday.jpg";
import photography from "../assets/images/photography.jpg";
import videography from "../assets/images/one.mp4";
import catering from "../assets/images/catering.jpg";
import event from "../assets/images/event.jpg";
import decor from "../assets/images/decor.jpg";
import footerImg from "../assets/images/footerBg.jpg";
import Footer from "./Footer";
import Package from "./package/Package";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <Slider />

      <div className="container-fluid home">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="homeHeading">
              <h1>
                <strong>
                  Welcome to Event
                  <br />
                  Planners
                </strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="leftHomeImage">
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
            <div className="rightHomeImage">
              <img src={rightImage} alt="Right Image" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footerImg midText">
              <h2>Welcome to Event Planners</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="ourPages">
              <h1>Our Packages</h1>
            </div>
            <div className="row mt-4">
              <div className="col-md-10 offset-md-1">
                <p>
                  We offer a variety of packages to meet your needs, interests,
                  budgets and standards. The size of your event is taken into
                  account when determining the ranking of an event. The three
                  formal options are mentioned below, all of which focuses on
                  special standards
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="packageRound">
          <div className="row">
            <div className="col-md-4  text-center">
              <div className="packageBg">
              <button type="btn" className="packageBtn">
                   <strong>ALPHA</strong>  <br />
                  Rs 1700
                </button>
              </div>
            </div>
            <div className="col-md-4  text-center">
              <div className="packageBg">
                <button type="btn" className="packageBtn">
                  <strong>BRAVO</strong>  <br />
                  Rs 2000
                </button>
              </div>
            </div>
            <div className="col-md-4  text-center">
              <div className="packageBg">
              <button type="btn" className="packageBtn">
                  <strong>CHARLI</strong> <br />
                  Rs 2200
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-12">
            <div className="footerImg midText">
              <h2>We offer a variety of packages to meet your needs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 cardHome">
            <div className="cardMain">
              <div class="card text-center">
                <div class="card-body cardBody">
                  <h3 class="card-title cardTitle">
                    Customize your own packages
                  </h3>
                  <Link to="/customize" class="btn btn-primary cardBtn">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="col-12">
            <div className="footerImg midText">
              <h2>Trust the magic of new beginning</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="ourPages">
              <h1>Our Services</h1>
            </div>
          </div>
        </div>

        <div className="row my-1">
          <div className="col-md-3  text-center ">
            <div className="serviceHome">
              <Link className=" circle  " to="/services">
                <strong>Photography</strong>
              </Link>
            </div>
          </div>
          <div className="col-md-3  text-center ">
            <div className="serviceHome">
              <Link className=" circle  " to="/services">
                <strong>Videography</strong>
              </Link>
            </div>
          </div>
          <div className="col-md-3  text-center ">
            <div className="serviceHome">
              <Link className=" circle  " to="/services">
                <strong>Decor</strong>
              </Link>
            </div>
          </div>
          <div className="col-md-3  text-center ">
            <div className="serviceHome">
              <Link className=" circle  " to="/services">
                <strong>Catering</strong>
              </Link>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-3  text-center ">
            <div className="serviceHome">
              <Link className="circle " to="/services"> 
                <strong>
                  Bridal
                  <br />
                  Showers
                </strong>
              </Link>
            </div>
          </div>
          <div className="col-md-3  text-center ">
            <div className="serviceHome">
              <Link className=" circle  " to="/services">
                <strong>
                  Corporate
                  <br />
                  Events
                </strong>
              </Link>
            </div>
          </div>
          <div className="col-md-3  text-center ">
            <div className="serviceHome">
              <Link className=" circle  " to="/services">
                <strong>
                  Birthday
                  <br />
                  Events
                </strong>
              </Link>
            </div>
          </div>
          <div className="col-md-3  text-center ">
            <div className="serviceHome mb-5">
              <Link className=" circle  " to="/services">
                <strong>
                  Wedding
                  <br />
                  Events
                </strong>
              </Link>
            </div>
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="col-12">
            <div className="footerImg midText">
              <h2>Trust the magic of new beginning</h2>
            </div>
          </div>
        </div>
        <div className="row my-5 ">
          <h1 className="text-center mt-5">Gallary</h1>
          <div
            className="col-md-4 col-sm-12 mt-5"
            onClick={() => props.history.push("/birthday_gallary")}
          >
            <h2>Catering</h2>
            <div class="card img-hover-zoom">
              <img src={catering} class="img-fluid" alt="birthday" />
              <div class="overlay">
                <div class="text">Catering</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-5 ">
            <h2>Decor</h2>
            <div class="card img-hover-zoom">
              <img src={decor} class="img-fluid" alt="birthday" />
              <div class="overlay">
                <div class="text">Decor</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-5">
            <h2>Photography</h2>
            <div class="card img-hover-zoom">
              <img src={photography} class="img-fluid" alt="birthday" />
              <div class="overlay">
                <div class="text">Photography</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-5">
            <h2>Videography</h2>
            <div class="card img-hover-zoom">
              <video width="430" height="282" controls>
                <source src={videography} type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg" /> */}
                Your browser does not support the video tag.
              </video>
              <div class="overlay">
                <div class="text">Videography</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-5">
            <h2>Birthday</h2>
            <div class="card img-hover-zoom">
              <img src={birthday} class="img-fluid" alt="birthday" />
              <div class="overlay">
                <div class="text">Birthday</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 my-5">
            <h2>Wedding</h2>
            <div class="card img-hover-zoom">
              <img src={event} class="img-fluid" alt="birthday" />
              <div class="overlay">
                <div class="text">Wedding</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-12">
            <div className="footerImg midText">
              <h2>Trust the magic of new beginning</h2>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 mt-4">
              {/* <div className="ourPages"> */}
              <h1 className="text-center mt-5">Contact Us</h1>
            </div>

            {/* </div> */}
          </div>

          <div className="homeContactUs">
            <div className="row">
              <div className="col-md-4  text-center">
                <div className="homeContactContent">
                  <h2>Contact</h2>
                  <h4>MM ALAM Road, Lahore</h4>
                  <h4>
                    Sp18-base-071@cuilahore.edu.pk
                    <br />
                    Sp18-base-122@cuilahore.edu.pk
                  </h4>
                  <h4>
                    +01 900 786 01
                    <br />
                    +01 900 786 01
                  </h4>
                </div>
              </div>
              <div className="col-md-4  text-center">
                <div className="homeContactContent">
                  <h2>
                    Customer
                    <br />
                    Service
                  </h2>
                  <h4>Feedback</h4>
                  <h4>Complaints</h4>
                  <h4>Help</h4>
                </div>
              </div>
              <div className="col-md-4  text-center">
                <div className="homeContactContent">
                  <h2>Opening Timing</h2>
                  <h4>
                    Monady - Friday
                    <br />
                    9:00am - 9:00pm
                  </h4>
                  <h4>
                    Satureday
                    <br />
                    9:00am - 6:pm
                  </h4>
                  <h4>
                    Sundaay
                    <br />
                    <span>ClOSED</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bgHomeFooter">
          <div className="row">
            <div className="col-md-12 col-sm-12 mt-4">
              <div className="homeFooter">
                <ul>
                  <li>
                    <Link to="#">
                      <i class="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i class="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i class="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="homeFooterLink">
                      <i class="fa fa-google-plus"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
