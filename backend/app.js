import express from 'express'
import Pod from './routes/podroutes.js'


const app=express();

//Middleware
app.use(express.json())

//Route
app.use("/api/v1" , Pod)

export default app;
