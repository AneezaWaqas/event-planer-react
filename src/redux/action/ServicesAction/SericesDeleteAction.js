import axios from "axios";


export const servicesDeleteAction = async (serviceID) =>{
    const access_token = localStorage.getItem("myToken");
    console.log("stateDelte =>", serviceID)
    const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: access_token
        },
      };
    
       const {data} = await axios.delete(`https://eventplannerpk.herokuapp.com/services/?id=${serviceID}`, config);
       console.log("delte-->", data)
       
 };