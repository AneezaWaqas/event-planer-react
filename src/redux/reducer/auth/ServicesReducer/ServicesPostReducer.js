
import {SERVICES_ADDED_SUCCESSFULLY, CLEAR_SERVICES_ADDED_SUCCESSFULLY} from '../../../types/ServiceTypes'

const inistialState = {
    servicesAddedSuccessfully: ""
}

 const services = ( state = inistialState, action) => {
   switch (action.type) {
       case SERVICES_ADDED_SUCCESSFULLY:
           return {...state, servicesAddedSuccessfully: action.payload }
       case CLEAR_SERVICES_ADDED_SUCCESSFULLY:
           return {...state, servicesAddedSuccessfully: "" }
       default:
           return state;
   }
}
export default services