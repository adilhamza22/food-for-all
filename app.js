//app.js
import express from 'express';
import {connectDB} from './config/db.js';
const app = express();

connectDB();

app.get('/',(req,res)=> res.send('Hello World. . .'));
const port = process.env.port || 8080;
app.listen(port,(req,res)=>console.log(`Server running on port: ${port}`))