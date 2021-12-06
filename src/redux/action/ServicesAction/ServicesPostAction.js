import axios from "axios";
import { SERVICES_ADDED_SUCCESSFULLY } from '../../types/ServiceTypes'


export const servicesPostAction = (state) =>{
     console.log("stateservicesPostAction",state)
     const access_token = localStorage.getItem("myToken");
    return async (dispatch) =>{
     const config = {
       headers: {
         "Content-Type": "application/json",
         authorization: access_token
       },
     };
     try {
       const {data} = await axios.post('https://event-planner12.herokuapp.com/services/add', state, config);
       console.log("datafromSerivcesAction", data)
       dispatch({type: SERVICES_ADDED_SUCCESSFULLY, payload: data.message})
       
     } catch (error) {
    //    dispatch({type: , payload: error.response.data})
       console.log(error)
     }
    }
 };