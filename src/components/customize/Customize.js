import React from "react";
import "./Customize.css";
function Customize() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="customizeHeading">
              <h1>Customize Your Package</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="inputFeildsOne">
              <select
                class="form-select selectFeild"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <input
                type="number"
                class="form-control"
                placeholder="Enter Number of People"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="inputFeildsTwo">
              <input
                type="datetime-local"
                class="form-control inputFeild"
                placeholder="Enter Number of People"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />

              <input
                type="number"
                class="form-control"
                placeholder="Enter Number of People"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
              <div className="circle">
               <div className="totals">
                   <h2>Your Total</h2>

               </div>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="followingHeading">
              <h2>Select from the following:</h2>
            </div>
          </div>
        </div>

        <div className="checkBoxFeild">
          <div className="row">
              
            <div class="col-md-2 offset-md-1">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customize;
