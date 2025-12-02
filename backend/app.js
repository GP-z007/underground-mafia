import express from 'express'
import pod from './routes/podroutes.js'


const app=express();

//Middleware
app.use(express.json())

//Route
app.use("/api/v1" , pod)

export default app;
