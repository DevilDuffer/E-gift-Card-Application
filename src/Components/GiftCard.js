import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function GiftCard() {
  const [gift, setGift] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setGift(values => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    //alert(employee.name +" "+employee.dept+" "+ employee.batch+" "+employee.salary);
    event.preventDefault();
    
    const gifts = {
      giftCardName:gift.giftCardName,
      brands:gift.brands,
      minimumAmount:gift.minimumAmount,
      maximumAmount:gift.maximumAmount,
      giftCardDesc:gift.giftCardDesc
    }
    function addUser(gifts){
      return axios.post("http://localhost:8080/giftCard/"+localStorage.getItem("email"),gifts);
  }
    addUser(gifts).then((response) => {
      alert(gifts.giftCardName+"Gift Generated Successfully");
      localStorage.setItem("min",gift.maximumAmount);
      localStorage.setItem("max",gift.maximumAmount);
    })
  }

  

  return (
    <div >
      <Navbar/>
      
        <h1 style={{color: "#090f0e",marginTop:"40px",marginLeft:"400px" }}>Create Gift Card</h1>
        <div className="Photo"><img className="Img" src="./GiftCard1.jpg" alt="" /></div>
      <div style={{marginTop:"50px"}}><form name="AddUser" onSubmit={handleSubmit} className="input-icons">
        <b style={{marginRight:"25px"}}>GiftCard Name</b>
        
        <i class="fa fa-user icon"></i>
        <input
          type="text"
          placeholder="Gift Card Name"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="giftCardName"
          value={gift.giftCardName || ""}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <b style={{marginRight:"85px"}}>Brands</b>
        
        <i class="fa fa-user icon"></i>
        <input
          type="text"
          placeholder="Enter brand"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="brands"
          value={gift.brands|| ""}
          onChange={handleChange}
          required
        ></input>
       
        <br></br>
        <b style={{marginRight:"2px"}}>Minimum Amount</b>
        
        <i class="fa fa-envelope icon"></i>
        <input
          type="number"
          placeholder="Enter Minimum Amount"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="minimumAmount"
          value={gift.minimumAmount || ""}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <b style={{marginRight:"2px"}}>Maximum Amount</b>
        
        <i class="fa fa-mobile icon"></i>
        <input
          type="number"
          placeholder="Enter Maximum Amount"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="maximumAmount"
          value={gift.maximumAmount || ""}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <b style={{marginRight:"2px"}}>GiftCard Description</b>
        
        <i class="fa fa-key icon"></i>
        <input
          type="text"
          placeholder="Enter GiftCard Description"
          style={{ paddingLeft: "35px" }}
          className="box"
          name="giftCardDesc"
          value={gift.giftCardDesc || ""}
          onChange={handleChange}
          required
        ></input>
        <br/>
        <input type="submit" className="box" value="Submit" style={{marginLeft:"145px"}}></input>
      </form>
      </div>
      </div>
  );
}
export default GiftCard;