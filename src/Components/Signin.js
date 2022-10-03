import React from 'react'
import axios from 'axios';
import {Route,Navigate} from "react-router-dom";
import {useState,useEffect} from "react";
import GiftCard from './GiftCard';
import Signup from './Signup';
import Button from 'react-bootstrap/esm/Button';
function Signin() {
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
      email: user.email,
      password:user.password,
    }
    var a,b;
    function Login(userr){
      localStorage.setItem("email",userr.email)
      return axios.post("http://localhost:8080/Login",userr);
  }
    Login(userr).then((response) => {
      a=response;
      b=JSON.stringify(a.data);
      
        
          //<Route path="/GiftCard" element={<GiftCard/>} />
          if(a.data==="Logged In Successfully"){
            console.log("Yes");
          window.location.href="/Dashboard";
          //<Route path="/Signup" element={<Navigate to="/GiftCard" />} />
          }
          else{
            console.log("No");
          }
      alert(b);
      console.log(a.data);
    })

  }
  const handleClick=(event)=>{
    window.location.href="/Signup";
  }
 
  return (
    <div>
        <h2 style={{color: "#090f0e",marginLeft:"400px",marginTop:"200px"}}>Login To E-Gift Card</h2>
        <div className="Photo" style={{marginBottom:"800px"}}><img className="Img" src="./loginnnn.jpg" alt=""/></div>
      <div className="form" style={{marginTop:"150px"}}><form name="AddUser" onSubmit={handleSubmit} className="input-icons">
      <b style={{marginRight:"35px"}}>Email</b>
        
        <i class="fa fa-envelope icon"></i>
        <input
          type="email"
          placeholder="Enter Email"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="email"
          value={user.email || ""}
          onChange={handleChange}
          required
        ></input><br></br>
        <b style={{marginRight:"7px"}}>Password</b>
        
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
        <input type="submit" className="box" style={{marginLeft:"55px"}}value="Submit"></input><br></br>
        <div className="button">
        <p className="para">If Account does not exist, then </p>

        <input type="button" className="buttonn"  onClick={handleClick} value="Signup"></input></div>
        </form>
        </div>
    </div>
  )
}

export default Signin
