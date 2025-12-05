import app from './app.js';
import dotenv from 'dotenv'
import { connectMongoDatabase } from './config/db.js'; 
dotenv.config({path:'backend/config/config.env'})
connectMongoDatabase();

const port = process.env.PORT || 3000  //we assign 3000 for safer side alternative side


const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${port}`);
    
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Server is shutting down n** handle promise rejection properly `);
    server.close(()=>{
        process.exit(1)
    })
    
})