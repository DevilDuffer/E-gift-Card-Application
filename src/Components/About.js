import React from 'react'
import Navbar from "../Components/Navbar";

function About() {
  return (
    <div>
      <Navbar/>
      <div className=""><img className="Img" src="./GiftCard.jpg" alt="" style={{height:"400px"}}/></div>
      {/* <h1 className="head">E-Gift Card Application</h1> */}
      <h4 style={{margin:"10px",float:"left"}}>We provide a platform to create and send gift card.E-Gifts cards work just like regular gift cards, a digital card with a code is emailed to the recipient. A copy of the E-Gift Card will also be sent to the purchaser as confirmation that the email was sent.
    E-Gift Cards are used just like regular git cards online or in stores. When redeeming E-Gift Cards in DeBrand Stores, the redemption code will be readily available.  
</h4>
    </div>
  )
}

export default About