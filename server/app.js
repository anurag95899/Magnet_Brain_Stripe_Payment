// This is your test secret API key.
const dotenv = require('dotenv');
dotenv.config()
const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE);
const mongoose  = require('mongoose')
const express = require('express');
const app = express();
const cors = require('cors')
const userRouter = require('./routes/index.js')

// app.use(express.static('public'));

const YOUR_DOMAIN = process.env.YOUR_DOMAIN;

 app.use(cors({credentials:true,origin:true}));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/server', userRouter);


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Hello Database Connection done")
}).catch((err)=>{
    console.log(err);
})

app.listen(5000, () => console.log('Running on port 5000'));