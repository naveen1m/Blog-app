import express from "express";
import cors from 'cors';
import connect from "./database/mongodbConnection.js";
import router from "./router/route.js";
import path from 'path'
import dotenv from 'dotenv'
dotenv.config();



const port = process.env.PORT || 5000
/** middlewares */
const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(cors());
app.disable('x-powered-by');  // less hacker know about our stack
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

/** HTTP request */
app.get('/',(req,res)=>{
    res.json('hello bro, its blog backend.')
})

/** api routes */
app.use('/api',router)

/** start server only when we have valid db connection */
connect().then(()=>{
    try {
        app.listen(port, ()=>{
            console.log(`server running at http://localhost:${port}`)
        })
    } catch (error) {
        console.log(`cannot connect to server ${error}`)
    }

}).catch(error => console.log(`invalid db connection ${error}`))

