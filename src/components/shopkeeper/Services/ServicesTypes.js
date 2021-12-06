import React from 'react'
import catering from "../../../assets/images/catering.jpg";
import photography from "../../../assets/images/photography.jpg";
import decor from "../../../assets/images/decor.jpg";
import soundSystem from "../../../assets/images/soundSystem.jpg";
import food from "../../../assets/images/food.jpg";
function ServicesTypes(props) {
  const [state, setState] = React.useState(
    {
      serviceType:""
    }
  );
  const toServiceForm = (e, serviceType) =>{
    props.history.push("/services/add", serviceType)
  }
    return (
        <>
            <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="ourPages">
              <h1>Services</h1>
            </div>
            <div className="row mt-4">
              <div className="col-md-10 offset-md-1">
                <p>
                  We offer a variety of Services to meet your needs, interests,
                  budgets and standards. The size of your event is taken into
                  account when determining the ranking of an event.
                </p>
              </div>
            </div>
            <div className="row py-4">
          <div
            className="col-md-4 col-sm-12"
            onClick={(e) => toServiceForm(e, "Catering")}
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
            onClick={(e) => toServiceForm(e, "Photography")}
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
            onClick={(e) => toServiceForm(e, "decor")}
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
            onClick={(e) => toServiceForm(e, "sound system")}
          >
            <div className="cards-custom ">
              <div class="card img-hover-zoom">
                {/* <div class=""> */}
                <img
                  className="card-img-top img-fluid"
                  src={soundSystem}
                  alt="Card image cap"
                />
                <div class="overlay">
                  <div class="text">Sound System</div>
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
            onClick={(e) => toServiceForm(e, "food")}
          >
            <div className="cards-custom">
              <div class="card img-hover-zoom">
                <img
                  className="card-img-top img-fluid"
                  src={food}
                  alt="Card image cap"
                />
                <div class="overlay">
                  <div class="text">Food</div>
                </div>
                <div className="card-body">
                  <p className="card-text bold">Food</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        </div>
        </>
    )
}

export default ServicesTypes
