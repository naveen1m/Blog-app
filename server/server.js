import express from "express";
import cors from 'cors';


const port = process.env.PORT || '8080'
/** middlewares */
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.json('hello bro, its blog backend.')
})

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})