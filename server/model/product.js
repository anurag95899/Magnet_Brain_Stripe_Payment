const mongoose = require('mongoose');

const productData = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    productname: {
      type: String,
    },
    productimage: {
        type: String,
     },
    productprice: {
     type: Number,
    },
    status:{
      type:String,
      default:'pending'
    },
    stripeTransactionid:{
      type:String
    }
 
  },
  { timestamps: true }
);



const Product = mongoose.model('product', productData);

module.exports = Product;
