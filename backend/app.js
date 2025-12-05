import express from 'express'
import Pod from './routes/podroutes.js'
import errorHandleMidleware from "./middleware/error.js"


const app=express();

//Middleware
app.use(express.json())

//Route
app.use("/api/v1" , Pod)


app.use(errorHandleMidleware)
export default app;
