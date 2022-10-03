import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Navbar from "./Navbar";

function AllGift() {
  const [gifts, setGifts] = useState([]);

  
  const handleClick = (event) => {
    window.location.href="/Payment";
  };
  

  const fetchGifts = async () => {
    console.log("async")
    const { data } = await axios.get("http://localhost:8080/getAllGiftCard");
    //var gifts=data;
    // data = JSON.stringify(data);
    // data = JSON.parse(data);
    const arr=[];
    data.forEach((element) => {
      if (localStorage.getItem("email") === element.users[0].email) {
        //console.log(element);
        arr.push(element);
      }
    });
    console.log(arr);
    setGifts(arr);
    console.log(gifts);
  };
  useEffect(() => {
    console.log("Hii")
    setTimeout(() => {
      fetchGifts();
    }, 1000);
    
  }, []);

  return (
    <div className="tablee">
      <Navbar></Navbar>
        {/* {gifts.map((gifft) => (
          
          <div className="" key={gifft.giftCardId}> */}
            <table class="table table-hover">
          <thead class="table-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Gift Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Redeem Detail</th>
              <th scope="col">Min. Amount</th>
              <th scope="col">Max Amount</th>
              <th scope="col">Description</th>
              <th scope="col">Send</th>
              </tr>
              </thead>
              {gifts.map((gifft) => (
                
              <tbody>
            <tr>
            <td  key={gifft.giftCardId}>{gifft.giftCardId}</td>
            <td>{gifft.giftCardName}</td>
            <td>{gifft.brands}</td>
            <td>{gifft.redemptionDetail}</td>
            <td>{gifft.minimumAmount}</td>
            <td>{gifft.maximumAmount}</td>
            <td>{gifft.giftCardDesc}</td>
            <td><Button value="Send" onClick={handleClick}>Send</Button></td>
            </tr>
            </tbody>
            ))}
            </table>
          {/* </div>
        ))} */}
      
      
    </div>
  );
}

export default AllGift;
