import React, { useState } from "react";
import "./ServicesForm.css";
import {servicesPostAction} from "../../../redux/action/ServicesAction/ServicesPostAction"
import {servicesUpdateAction} from "../../../redux/action/ServicesAction/ServiceUpdateAction"
import {CLEAR_SERVICES_ADDED_SUCCESSFULLY} from '../../../redux/types/ServiceTypes'
import {useDispatch, useSelector} from "react-redux"

function ServicesForm(props) {

  const dispatch = useDispatch()
  const {servicesAddedSuccessfully} = useSelector(state => state.services)
  console.log("servicesAddedSuccessfully", servicesAddedSuccessfully)
  const [state, setState] = useState({
    image: "",
    price: "",
    description: "",
    serviceId: "",
    serviceType: props.history.location.state
  });
  const [imagePreview, setimagePreview] = useState("");
  console.log(props.location.state)

  React.useEffect(() => {
   console.log("props.location.state", props.location.state)
   let {price, description, serviceType, serviceId } = state;
   price = props.location.state.price || "";
   description = props.location.state.description || "";
   serviceId = props.location.state.serviceId || "";
   serviceType = props.location.state.serviceType || props.history.location.state || "";
   setState({
     price,
     description,
     serviceType,
     serviceId
   })
  }, [])

  const hanldeChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    let { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const fileHanlde = (e) => {
    if (e.target.files.length !== 0) {
    //   setCurrentImage(e.target.files[0].name);
      setState({
        ...state,
        [e.target.name]: e.target.files[0],
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setimagePreview(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
 
  if(servicesAddedSuccessfully === "service added successfully"){
    dispatch({type: CLEAR_SERVICES_ADDED_SUCCESSFULLY})
    props.history.push("/services")
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(state.serviceId){
      const obj={
        price: state.price,
        description: state.description,
        serviceType: state.serviceType,
        serviceId: state.serviceId
      }
      
      dispatch(servicesUpdateAction(obj))
    }else{

      const obj={
        price: state.price,
        description: state.description,
        serviceType: state.serviceType
      }
      dispatch(servicesPostAction(obj))
      console.log("state", state)
    }

  }
  return (
    <>
      {console.log("state", state)}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="ourPages">
              <h1>Services</h1>
            </div>
            </div>
            </div>
        <div className="row">
         
          <div className="col-sm-12 col-md-6 mb-5">
            <div className="servicesInput">
              <form className="sericeBorder" onSubmit={handleSubmit}>
                <div class="form-group border-bottom">
                  <label className="lable" htmlFor ="exampleFormControlFile1">
                    Select a Image :
                  </label>
                  <input
                    type="file"
                    class="form-control-file mb-4 "
                    id="exampleFormControlFile1"
                    placeholder="Select a Image"
                    name="image"
                    onChange={fileHanlde}
                  />
                </div>

                <div class="form-group border-bottom">
                  <label className="lable" htmlFor="exampleInputPrice1">
                    Price :
                  </label>
                  <input
                    type="number"
                    class="form-control mb-4"
                    id="exampleInputPrice1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Price"
                    name="price"
                    value={state.price}
                    onChange={hanldeChange}
                  />
                </div>
                <div class="form-group">
                  <label className="lable" htmlFor="exampleFormControlTextarea1">
                    description :
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Product descriptions..."
                    name="description"
                    value={state.description}
                    onChange={hanldeChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="btnAccount serviceBtn">
                    <button
                      type="submit"
                      className="primary-btn submit loginBtn"
                    >
                     {state.serviceId ? "Update" : "Submit"} 
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className=" col-md-6 col-sm-12 mb-4">
            <div className="servicesImg">
            {imagePreview ? <img src={imagePreview} /> : ""}
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default ServicesForm;
