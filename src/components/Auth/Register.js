import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import register from "../../assets/images/register.jpg";
import "./Auth.css";
import { registerAction } from "../../redux/action/auth/RegisterAction";
import { CLEAR_SUCCESSFULLY_REGISTERED } from "../../redux/types/ResgisterTypes";
import { useDispatch, useSelector } from "react-redux";
function Register(props) {
  const { SuccessfullyRegister, registerError } = useSelector((state) => state.register);
  console.log("fromStrore", SuccessfullyRegister);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: 1 || 2 ,
    checked:true
  });

  const clearState = () => ({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSumbit, setIsSumbit] = useState(false);

  if (SuccessfullyRegister === "user created successfully") {
    clearState();
    dispatch({ type: CLEAR_SUCCESSFULLY_REGISTERED });

    props.history.push("/login");
  }

  const handleChange = (event) => {
    let { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleChangeCheckBox = (event) =>{
    let values = event.target.value
    console.log("values==>",values)
    
    setState({...state, userType : values})
    console.log("userType==>",state.userType)

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(state));
    setIsSumbit(true);
    // if(Object.keys(formErrors).length === 0 && isSumbit){
      console.log("fromSubmit",state.userType)
    const obj = {
      firstName: state.firstName,
      email: state.email,
      password: state.password,
      lastName: state.lastName,
      phone: state.phone,
      userName: state.userName,
      userType: state.userType
    };

    console.log("obj",obj)
    dispatch(registerAction(obj));

    console.log("from Submit",state)
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is requird";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is requird";
    }
    if (!values.userName) {
      errors.userName = "User Name is requird";
    }
    if (!values.email) {
      errors.email = "Email is requird";
    } 
    if (!values.phone) {
      errors.phone = "phone is requird";
    }
    // if (!values.userType) {
    //   errors.userType = "User Type is requird";
    // }
    if (!values.password) {
      errors.password = "Password is requird";
    }

    // else if (values.password.length < 4) {
    //   errors.password = "Password length must be 4";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password length must be less then 10";
    // }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is requird";
    }
    //  else if (values.confirmPassword.length < 4) {
    //   errors.confirmPassword = "Confirm Password length must be 4";
    // } else if (values.confirmPassword.length > 10) {
    //   errors.confirmPassword = "Confirm Password length must be less then 10";
    // }
    else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password do not match";
    }
    return errors;
  };
  return (
    <>
      {console.log("state===>>>>>>", state)}
      <div className="container-fluid register">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="bgRegister">
              <img src={register} alt="sdafds" />
            </div>
          </div>
          <div className="col-md-6 p-5">
            <div className="section-title mt-5">
              {/* <pre>{JSON.stringify(state,undefined,2)}</pre> */}
              <h1 className="title text-center mb-4">Register</h1>
              {Object.keys(formErrors).length === 0 && registerError === 0 && isSumbit ? (
                <h5 className="title text-center mb-4">
                  Successfully Registered
                </h5>
              ) : (
                registerError &&  <div className="alert alert-danger text-center" role="alert">
                {registerError.toUpperCase()}
              </div>
                  
              
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group p-2">
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <input
                        placeholder="First Name"
                        id="first name"
                        type="text"
                        className="form-control"
                        // required
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                      />
                      <span>{formErrors.firstName}</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="form-group p-2">
                    <input
                      placeholder="Last Name"
                      id="lastName"
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      name="lastName"
                      // required
                      value={state.lastName}
                      onChange={handleChange}
                    />
                    <span>{formErrors.lastName}</span>
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="form-group p-2">
                    <input
                      placeholder="User Name"
                      id="userName"
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      name="userName"
                      // required
                      value={state.userName}
                      onChange={handleChange}
                    />
                    <span>{formErrors.userName}</span>
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="form-group p-2">
                    <input
                      placeholder="Email"
                      id="email"
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      name="email"
                      required
                      value={state.email}
                      onChange={handleChange}
                    />
                    <span>{formErrors.email}</span>
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="form-group p-2">
                    <input
                      placeholder="phone"
                      id="phone"
                      type="phone"
                      className="form-control"
                      // required
                      name="phone"
                      value={state.phone}
                      onChange={handleChange}
                    />
                    <span>{formErrors.phone}</span>
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="form-group p-2">
                    <input
                      placeholder="Password"
                      id="password"
                      type="password"
                      className="form-control"
                      // required
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                    />
                    <span>{formErrors.password}</span>
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="form-group p-2">
                    <input
                      placeholder="Confirm Password"
                      id="confirmPassword"
                      type="password"
                      className="form-control"
                      // required
                      name="confirmPassword"
                      value={state.confirmPassword}
                      onChange={handleChange}
                    />
                    <span>{formErrors.confirmPassword}</span>
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="form-group p-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="flexRadioDefault1"
                        value="1"
                        defaultChecked
                        onChange= {handleChangeCheckBox}
                        // defaultChecked={state.userType == 1 ? true : false}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Avail Service
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="userType"
                        id="flexRadioDefault2"
                        value="2"
                        // checked={state.userType == 2 ? true : false}
                        onChange= {handleChangeCheckBox}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Provide Service
                      </label>
                    </div>
                  </div>
                  <span>{formErrors.userType}</span>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="btnAccount">
                    <span>
                      <Link to="/login" className="text-decoration-none">
                        Have a Already Account..?
                      </Link>
                    </span>
                    <button
                      type="submit"
                      className="primary-btn submit loginBtn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
