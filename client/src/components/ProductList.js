import React, { useState } from 'react'
import '../App.css'
import AddCartPage from '../pages/CartPage'
import {Link} from 'react-router-dom'
const ProductList = ({product,addItem,cart}) => {


  return (
    <>
    <div className="" style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",}}><h4>View All Your Cart Item : </h4><Link style={{padding:"10px 20px", backgroundColor:"#333" ,borderRadius:"5px", textDecoration :"none",cursor:"pointer",color:"#fff",marginLeft:"5px"}} to="/cart">{cart.length}</Link></div>
        
     <div className="product-con" style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap", gap:"20px",position:"relative"}}>
     
     {product.map((dets,idx)=>{
// ₹
      return (  
          <div className="card" key={idx}>
          <img src={dets.productImage} alt="" />
           <h4>Product Name : {dets.productName}</h4>
           <h4>Price : {dets.productPrice}₹</h4>
           <button onClick={()=>{
            addItem({dets})
           }}>Add To Cart</button>
         </div>
         )

     })}

     </div>
    </>
  )
}

export default ProductList