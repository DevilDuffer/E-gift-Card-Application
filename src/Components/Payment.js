import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
function Payment() {
  const [payment, setPayment] = useState({});
  // const [cardTypeUrl] = useState(
  //   "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png"
  // );
  // const [card] = useState(
  //   "https://www.pngitem.com/pimgs/m/194-1948623_atm-card-png-transparent-images-credit-card-png.png"
  // );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // if(name==="paymentamount"){
    //   if(value<){
    //     alert
    //   }
    // }
    setPayment((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const pytm = {
      paymentamount: payment.paymentamount,
      nameonthecard: payment.nameonthecard,
      cardNumber: payment.cardNumber,
      cardexpiry: payment.cardexpiry,
      cvv: payment.cvv,
    };
    function addUser(pytm) {
      return axios.post("http://localhost:8080/addpayment", payment);
    }
    addUser(pytm).then((response) => {
      alert("Payment Registered Successfully");
    });
  };

  return (
    
    <div>
      <Navbar/>
      {/* <div class="column">
        <img
          className="Img"
          src={card}
          style={{ height: 100, width: 200 }}
          alt=""
        />
      </div> */}
      <div class="column">
        {/* <div>
          <img
            className="Img"
            src={cardTypeUrl}
            style={{ height: 100, width: 200 }}
            alt=""
          />
        </div> */}
          <h2 style={{ color: "#090f0e" ,marginTop:"20px",marginLeft:"450px"}}>Payment</h2>
          <br />
          <div className="Photo"><img className="Img" src="./Payment.png" alt="" /></div>
          <div className="form" style={{marginTop:"40px"}}>
          <form name="AddUser" onSubmit={handleSubmit}>
          <b style={{marginRight:"45px"}}>Amount</b>
              <input
                type="number"
                placeholder="Enter Amount"
                style={{ paddingLeft: "15px", height: 30 }}
                className="box"
                name="paymentamount"
                value={payment.paymentamount || ""}
                onChange={handleChange}
                required
              ></input>
            
            <br></br>
            <b style={{marginRight:"5px"}}>Name on Card</b>
            <input
              type="text"
              placeholder="Enter Name on the Card"
              style={{ paddingLeft: "15px", height: 30 }}
              className="box"
              name="nameonthecard"
              value={payment.nameonthecard || ""}
              onChange={handleChange}
              required
            ></input>
            <br></br>
            <b style={{marginRight:"15px"}}>Card Number</b>
            <input
              type="number"
              placeholder="Enter Card Number"
              style={{ paddingLeft: "15px", height: 30 }}
              className="box"
              name="cardNumber"
              value={payment.cardNumber || ""}
              onChange={handleChange}
              required
            ></input>
            <br></br>
            <b style={{marginRight:"25px"}}>Card Expiry</b>
            <input
              type="text"
              placeholder="Card Expiry Date"
              style={{ paddingLeft: "15px", height: 30 }} //6 or 23 line k error solve kro
              className="box"
              name="cardexpiry"
              value={payment.cardexpiry || ""}
              onChange={handleChange}
              required
            ></input>
            <br></br>
            <b style={{marginRight:"75px"}}>Cvv</b>
            <input
              type="number"
              placeholder="Enter CVV code"
              style={{ paddingLeft: "15px", height: 30 }}
              className="box"
              name="cvv"
              value={payment.cvv || ""}
              onChange={handleChange}
              required
            ></input>
            <br></br>
            <div>
              <input type="submit" className="box" value="Submit" style={{marginLeft:"85px"}}></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Payment;
