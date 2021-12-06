import axios from "axios";
// import { SERVICES_ADDED_SUCCESSFULLY } from '../../types/ServiceTypes'


export const servicesUpdateAction = (state) =>{
     console.log("stateservicesUpdateAction",state)
     const access_token = localStorage.getItem("myToken");
     const serviceId = state.serviceId
     const obj = {
        serviceType: state.serviceType,
        price: state.price,
        description: state.description,

     }
    return async (dispatch) =>{
     const config = {
       headers: {
         "Content-Type": "application/json",
         authorization: access_token
       },
     };
     try {
       const {data} = await axios.patch(`https://eventplannerpk.herokuapp.com/services/?id=${serviceId}`, obj, config);
       console.log("datafromSerivcesAction", data)
    //    dispatch({type: SERVICES_ADDED_SUCCESSFULLY, payload: data.message})
       
     } catch (error) {
    //    dispatch({type: , payload: error.response.data})
       console.log(error)
     }
    }
 };