import mongoose from "mongoose";
// import { MongoMemoryServer } from "mongodb-memory-server";

async function connect(username,pass){
    const uri = `mongodb+srv://${username}:${pass}@cluster0.9wqgktu.mongodb.net/?retryWrites=true&w=majority`
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