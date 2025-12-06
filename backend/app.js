import express from 'express'
import Pod from './routes/podroutes.js'
import errorHandleMidleware from "./middleware/error.js"
import user from './routes/userRoutes.js'


const app=express();

//Middleware
app.use(express.json())

//Route
app.use("/api/v1" , Pod)
app.use("/api/v1" , user)


app.use(errorHandleMidleware)
export default app;
