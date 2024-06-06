
import React, { useState } from 'react'
import {loadStripe} from '@stripe/stripe-js';

const CartPage = ({cart}) => {
 
  var fullPayment = 0;

  // console.log(fullPayment);

  // console.log(cart)

  const stripeCheckOut = async (e)=>{
    e.preventDefault();
    const stripe = await loadStripe("pk_test_51PNzSxBmEZtxD6m4gBv6YEYwax2XELzn7IarqiR4zmJzZBGNEGGDnmbIU16kkTsKYPYtlm9DL6L2r1TjoGSK2EYO00Pm6KuzYG");
    const body = {
      products:cart
    }

    const headers = {
      "Content-Type" : "application/json"
    }

    const response = await fetch('http://localhost:5000/server/create-checkout-session',{
      method:'POST',
      headers:headers,
      mode:'cors',
      body:JSON.stringify(body)
    })
    
    console.log(response);
    const session = await response.json()
    const result = stripe.redirectToCheckout({
      sessionId:session.id
    })

 if(result.error){
  console.log(result.error);
 }    
  }

  return (
    <>
<div className="">
    <h2 style={{textAlign:"center"}}>Total Items In Cart = {cart.length}</h2>
<div className="cart-con" style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap", gap:"20px",position:"relative"}}>
     
     {cart.map((item,idx)=>{
      fullPayment = fullPayment + item.dets.productPrice
      console.log(item.dets)
      return (  
          <div className="card" key={idx}>
          <img src={item.dets.productImage} alt="" />
           <h4>cart Name : {item.dets.productName}</h4>
           <h4>Price : {item.dets.productPrice}₹</h4>
         </div>
         )

     })}

     </div>
    <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <h4>Total Amount To Pay : </h4>
     <button onClick={stripeCheckOut} style={{marginLeft:"10px",padding:"10px 20px",backgroundColor:"royalblue",border:"none",color:"#fff",borderRadius:"5px"}}>{fullPayment}₹</button>
    
    </div>
     </div>
    </>
  )
}

export default CartPage