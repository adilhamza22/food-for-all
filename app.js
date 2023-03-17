//app.js
import express from 'express';
import {connectDB} from './db'
connectDB();
const app = express();

app.get('/',(req,res)=> res.send('Hello World   '));
const port = process.env.port || 8082;
app.listen(port,(req,res)=>console.log(`Server running on port: ${port}`))