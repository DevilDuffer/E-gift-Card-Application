import React from 'react'
import { Link, Routes, Route, Outlet} from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <div className="App">
      <ul >
      <div className="Navbar"><h2>E-GiftCard Application</h2></div>
        <div className="Navbar"><Link to="/About" style={{ textDecoration: 'none' }}><b className="Link">About</b></Link></div>
        
        {/* <div className="Navbar"><Link to="/Signup" style={{ textDecoration: 'none' }}><b className="Link">Signup </b></Link></div>
        <div className="Navbar"><Link to="/Signin" style={{ textDecoration: 'none' }}><b className="Link">Signin </b></Link></div> */}
        <div className="Navbar"><Link to="/GiftCard" style={{ textDecoration: 'none' }}><b className="Link">Create GiftCard </b></Link></div>
        <div className="Navbar"><Link to="/Payment" style={{ textDecoration: 'none' }}><b className="Link">Payment</b></Link></div>
        <div className="Navbar"><Link to="/AllGift" style={{ textDecoration: 'none' }}><b className="Link">AllGifts</b></Link></div>
        <div className="Navbar"><Link to="/Signin" style={{ textDecoration: 'none' }}><b className="Link">Logout</b></Link></div>
        {/* <Link to="/EmployeeList">  Employee List      4.</Link>
        <Link to="/DeleteEmployee">Delete Employee</Link> */}
        
      </ul>

      </div>
    </div>
  )
}

export default Navbar
