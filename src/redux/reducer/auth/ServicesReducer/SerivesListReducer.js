
import {SERVICES_LIST} from '../../../types/ServiceTypes'

const inistialState = {
    servicesList: []
}

 const servicesListReducer = ( state = inistialState, action) => {
     console.log("action.payload", action.payload)
   switch (action.type) {
       case SERVICES_LIST:
           return {...state, servicesList: action.payload }
     default:
           return state;
   }
}
export default servicesListReducer