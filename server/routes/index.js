const express = require('express')

const router = express.Router();

const dotenv = require('dotenv');
dotenv.config()

const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE);

const Product = require('../model/product.js')

router.post('/create-checkout-session', async (req, res) => {

    const {products} = req.body;
  console.log(products);
    const lineItems = products.map((data)=>({
 
        price_data:{
            currency:'inr',
            product_data:{
              name:data.dets.productName,
              images:[data.dets.productImage]
            },
            unit_amount:Math.round(data.dets.productPrice * 100)
          },
          quantity:1

    }))

   
     const YOUR_DOMAIN = process.env.YOUR_DOMAIN;

try{

  const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.YOUR_DOMAIN}/success`,
      cancel_url: `${process.env.YOUR_DOMAIN}/cancel`,
  });

  // Retrieve the session to get the customer email

  const sessionDetails = await stripe.checkout.sessions.retrieve(session.id);

  products.forEach(async (data)=>{

    const newProduct = await new Product({
      email:sessionDetails.customer_email,
      productname: data.dets.productName,
      productimage:data.dets.productImage,
      productprice:data.dets.productPrice,
      // status:session.status,
      status:"completed",
      stripeTransactionid:session.id
    });
    
   await newProduct.save()
  })

  const customers = await stripe.customers.list({});

customers.data.forEach(customer => {
  console.log(customer.email);
});
 

  res.json({id:session.id})
}catch (error) {
  console.error(error);
  res.status(500).json({ error: 'An error occurred while creating the checkout session.' });
}


});

module.exports = router;