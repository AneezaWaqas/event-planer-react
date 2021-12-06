import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import {LOGOUT} from '../redux/types/LoginTypes'
import {useDispatch, useSelector} from 'react-redux'
function Navbar() {
  const dispatch = useDispatch()
  const {token} = useSelector(state => state.login)
  const userType = localStorage.getItem("userType")
  console.log("userType.....", userType)
  const logout = () =>{
    localStorage.removeItem('myToken');
    localStorage.removeItem('userType');
    dispatch({type: LOGOUT})
  }
    return (
        <>
<nav className="navbar fixed-top navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/">
      <img  className="logo" src={logo} alt="logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      {userType == 2 ? 
     ( <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/services">Serivces</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services/types">Add Services</Link>
        </li>
      
      
        { token ? (
 <li className="nav-item">
 <Link className="nav-link" onClick={logout} to="/login">Logout</Link>
</li>) : ""}
       
      </ul>
      ): (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             { token ? (
 <li className="nav-item">
 <Link className="nav-link" to="/dashboard">Dashboard</Link>
</li>) : ""}
       
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/package">Packages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallary">Gallary</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        { token ? (
 <li className="nav-item">
 <Link className="nav-link" onClick={logout} to="/login">Logout</Link>
</li>) : (
        
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sgin Up</Link>
        </li> )
       
        }
       
      </ul>
      )}
    </div>
  </div>
</nav>

            
        </>
    )
}

export default Navbar
