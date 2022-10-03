import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
//import {Route,Navigate} from "react-router-dom";
//import Signin from "./Signin";
function Signup() {
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(values => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    //alert(employee.name +" "+employee.dept+" "+ employee.batch+" "+employee.salary);
    event.preventDefault();
    
    const userr = {
      firstname: user.firstname,
      lastname:user.lastname,
      email: user.email,
      phonenumber: user.phonenumber,
      password:user.password,
      address:user.address
    }
    function addUser(userr){
      return axios.post("http://localhost:8080/add",userr);
  }
    addUser(userr).then((response) => {
      alert(userr.firstname+" Registered Successfully");
      window.location.href="/Signin";
    })
  }

  return (
    <div >
        <h1 style={{color: "#090f0e",marginTop:"20px",marginLeft:"400px"}}>Register To E-Gift Card</h1>
        <div className="Photo"><img className="Img" src="./login.png" alt=""/></div>
        <div className="form" style={{marginTop:"40px"}}>
      <form name="AddUser" onSubmit={handleSubmit} className="input-icons">
      <b style={{marginRight:"45px"}}>First Name</b>
        <i class="fa fa-user icon"></i>
        <input
          type="text"
          placeholder="Enter First Name"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="firstname"
          value={user.firstname || ""}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <b style={{marginRight:"45px"}}>Last Name</b>
        <i class="fa fa-user icon"></i>
        <input
          type="text"
          placeholder="Enter Second Name"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="lastname"
          value={user.lastname || ""}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <b style={{marginRight:"80px"}}>Email</b>
        <i class="fa fa-envelope icon"></i>
        <input
          type="email"
          onInput={(e) => e.target.value = ("" + e.target.value).toLowerCase()}
          placeholder="Enter Email"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="email"
          value={user.email || ""}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <b style={{marginRight:"5px"}}>Mobile Number</b>
        <i class="fa fa-mobile icon"></i>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="phonenumber"
          value={user.phonenumber || ""}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <b style={{marginRight:"55px"}}>Password</b>
        <i class="fa fa-key icon"></i>
        <input
          type="password"
          placeholder="Enter Password"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="password"
          value={user.password || ""}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <b style={{marginRight:"65px"}}>Address</b>
        <i class="fa fa-map icon"></i>
        <input
          type="text"
          placeholder="Enter Address"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="address"
          value={user.address || ""}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <input type="submit" className="box" value="Submit" style={{marginLeft:"100px"}}></input>
      </form>
      </div>
    </div>
  );
}
export default Signup;
