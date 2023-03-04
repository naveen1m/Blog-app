import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect(){
    const mongodb = await MongoMemoryServer.create();
    const uri = mongodb.getUri();

    const db = await mongoose.connect(uri);
    console.log('database connected successfully');
    return db;
}
export default connect;