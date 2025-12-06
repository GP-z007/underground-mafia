import app from './app.js';
import dotenv from 'dotenv'
import { connectMongoDatabase } from './config/db.js'; 
dotenv.config({path:'backend/config/config.env'})

// Handle uncaught exception errors
process.on('uncaughtException',(err)=>{
    console.log(`Error : ${err.message}`);
    console.log(`Server is shutting down due to uncaught exception error`);
    process.exit(1);
})

const port = process.env.PORT || 3000  //we assign 3000 for safer side alternative side
let server;

const startServer = async () => {
    await connectMongoDatabase();
    server = app.listen(port,()=>{
        console.log(`Server is running on ${port}`);
    })
}

startServer();

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Server is shutting down n** handle promise rejection properly `);
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }else{
        process.exit(1)
    }
    
})