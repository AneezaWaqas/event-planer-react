import axios from "axios";
import { SERVICES_LIST } from '../../types/ServiceTypes'


export const servicesListAction = () =>{
    //  console.log("stateservicesPostAction",state)
     const access_token = localStorage.getItem("myToken");
    return async (dispatch) =>{
     const config = {
       headers: {
         "Content-Type": "application/json",
         authorization: access_token
       },
     };
     try {
       const {data} = await axios.get('https://event-planner12.herokuapp.com/services', config);
       console.log("datafromSerivcesListAction", data.data)
       dispatch({type: SERVICES_LIST, payload: data.data})
       
     } catch (error) {
    //    dispatch({type: , payload: error.response.data})
       console.log(error)
     }
    }
 };