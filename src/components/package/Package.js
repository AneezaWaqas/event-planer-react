import React from "react";
import { Link } from "react-router-dom";
import './Package.css'
function Package() {
  return (
    <>
      <div className="container-fluid">
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
            <div className="ourPages">
              <h2>Complete Wedding Decor Price</h2>
            </div>
          </div>
        </div>


        <div className="packageRound">
          <div className="row">
         
            <div className="col-md-4  text-center bgLine">
              <div className="packageBg alpha">
              <button type="btn" className="packageBtn">
                   <strong>ALPHA</strong>  <br />
                  Rs 1700
                </button>
                
              </div>
              <div className="packageList">
              <ul>
                    <li>
                      Complete SetUp
                    </li>
                    <li>
                      Customize and Eligant decor plan
                    </li>
                    <li>
                      Customize and Eligant decor plan
                    </li>
                    <li>
                      Complete SetUp
                    </li>
                    <li>
                      Customize and Eligant decor plan decor plan decor plan 
                    </li>
                  </ul>
                  <p className="mt-5">Rs. 1900/- Per head(includeing Photography)</p>

                  <button className="packageDetailBtn">
                    Get Started
                  </button>
              </div>
            </div>
            
            <div className="col-md-4  text-center">
              <div className="packageBg bravo">
                <button type="btn" className="packageBtn">
                  <strong>BRAVO</strong>  <br />
                  Rs 2000
                </button>
              </div>
              <div className="packageList bravoBg">
                  <ul>
                    <li>
                      Complete SetUp
                    </li>
                    <li>
                      Customize and Eligant decor plan
                    </li>
                    <li>
                      Customize and Eligant decor plan
                    </li>
                    <li>
                      Complete SetUp
                    </li>
                    <li>
                      Customize and Eligant decor plan decor plan decor plan 
                    </li>
                  </ul>
                  <p className="mt-5">Rs. 1900/- Per head(includeing Photography)</p>
                  <button className="packageDetailBtn">
                    Get Started
                  </button>
              </div>
            </div>
            <div className="col-md-4  text-center bgLine">
              <div className="packageBg charli">
              <button type="btn" className="packageBtn">
                  <strong>CHARLI</strong> <br />
                  Rs 2200
                </button>
              </div>
              <div className="packageList">
              <ul>
                    <li>
                      Complete SetUp
                    </li>
                    <li>
                      Customize and Eligant decor plan
                    </li>
                    <li>
                      Complete SetUp
                    </li>
                    <li>
                      Customize and Eligant decor plan
                    </li>
                    <li>
                      Customize and Eligant decor plan decor plan decor plan 
                    </li>
                  </ul>
                  <p className="mt-5">Rs. 1900/- Per head(includeing Photography)</p>
                  <button className="packageDetailBtn">
                    Get Started
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Package;
