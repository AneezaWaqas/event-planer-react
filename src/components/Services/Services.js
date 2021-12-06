import React from "react";
import "./Services.css";
import { servicesListAction } from "../../redux/action/ServicesAction/SerivesListAction";
import { servicesDeleteAction } from "../../redux/action/ServicesAction/SericesDeleteAction";
import { useDispatch, useSelector } from "react-redux";
import ServicesForm from "../shopkeeper/Services/ServicesForm";
import { Link } from "react-router-dom";
function Services(props) {

  // const [state, setState] = React.useState({
  //   loading: false
  // })

  const dispatch = useDispatch();
  const { servicesList } = useSelector((state) => state.servicesListReducer);

  console.log("servicesList", servicesList);
  const userType = localStorage.getItem('userType')

 

  React.useEffect(() => {

    // setState({loading:true})
    dispatch(servicesListAction());
    // setState({loading:false})
  }, [servicesList]);

//   const editList = (event, item) => {
//     if (item) {
//       props.history.push("/services/add");
//     }
//   };
  return (
    <>
    {/* {!state.loading ? <div className="se-pre-con"></div> : ""} */}
      <div class="container-fluid servicesList">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Services List</h1>
          </div>
        </div>

        <div className="servicesCard">
          <div class="row">
            {servicesList.map((item) => (
              <div class="card col-md-12 p-3 mt-3">
                <div class="row ">
                  <div class="col-md-4">
                    <img
                      class="w-100"
                      src="https://via.placeholder.com/350x250"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-block" key={item.serviceId}>
                      <h2 class="card-title border-bottom">Price : {item.price}</h2>
                      <p class="card-text text-justify">{item.description}</p>
                      {userType && userType == 2 ? (
                       <>
                        <Link
                        to={{
                          pathname: "/services/add",
                          state: item,
                        }}
                        class="btn btn-primary"
                        >
                        Edit
                      </Link>
                        <button className="btn btn-primary mx-3" onClick={()=> servicesDeleteAction(item.serviceId)}>Delete</button>
                      </>
                        ) : ""} 
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <ServicesForm 
        state={servicesList}
      /> */}
    </>
  );
}

export default Services;
