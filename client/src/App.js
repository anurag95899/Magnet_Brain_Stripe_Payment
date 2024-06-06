import React, { useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Success from './components/Success.js';
import Cancel from './components/Cancel.js';
import CartPage from './pages/CartPage.js';
import ProductList from './components/ProductList.js';


const App = () => {

  const[product,setProduct] = useState([
    {
        productName:"football",
        productImage:"https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productPrice:450,

    },
    {
        productName:"Bat",
        productImage:"https://images.unsplash.com/photo-1593766788306-28561086694e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productPrice:350,

    }, {
        productName:"Batminton",
        productImage:"https://www.shutterstock.com/image-photo/badminton-sport-equipments-rackets-shuttlecocks-600nw-2302308577.jpg",
        productPrice:650,

    }, {
        productName:"BaseBall",
        productImage:"https://media.istockphoto.com/id/1471217278/photo/baseball-ball-in-a-grass-of-baseball-arena-stadium.jpg?s=612x612&w=0&k=20&c=OaKZFgu2C9P_rVQnGZYB31pf1YYMk6I5Qoe3ia5H7QM=",
        productPrice:450,

    }
    ,{
        productName:"Carrom Board",
        productImage:"https://images.unsplash.com/photo-1617300067484-314ed2cfd9a6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productPrice:350,

    }
    ,{
        productName:"Football Shoes",
        productImage:"https://images.unsplash.com/photo-1506079906501-adbb5907b720?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        productPrice:750,

    }
])
// console.log(product);

  const [cart,setCart] = useState([]);

  const addItem = (dets)=>{
      setCart([...cart,dets])
  }

  const lengthOfCart = cart.length;

  return (
   <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList product={product} addItem={addItem} cart={cart} />} />
         
          <Route path="/success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="cart" element={<CartPage cart={cart} />} />
        
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
