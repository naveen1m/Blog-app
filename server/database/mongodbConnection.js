import mongoose from "mongoose";
import dotenv from 'dotenv';
// import { MongoMemoryServer } from "mongodb-memory-server";
dotenv.config();
async function connect(){
    const uri = process.env.DB_URI;
    try {
        await mongoose.connect(uri,{useNewUrlParser:true})
        console.log(`db connected successfully.`)
    } catch (error) {
        console.log(`error in connection ${error}`)
    }





    // const mongodb = await MongoMemoryServer.create();
    // const uri = mongodb.getUri();

    // const db = await mongoose.connect(uri);
    // console.log('database connected successfully');
    // return db;
}
export default connect;