import userModel from '../model/userSchema.js';
import postModel from '../model/postSchema.js';

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import env from '../config.js'
import fs from 'fs'



export async function register(req,res,next){
    const {username, email, password} = req.body;

    if(password){
      bcrypt.hash(password,10)
        .then(hashedpassword => {
            const newUser = new userModel({
                username,
                email : email,
                password: hashedpassword,
            });
            newUser.save()
                .then(()=> res.status(201).json('user added ' + username))
                .catch(err => res.status(400).json(`error : ${err}`))
        })
        .catch(err => console.log(err))
        }
            
    }
   
export async function login(req,res,next){
    const {email, password} = req.body;
    userModel.findOne({email:email})
        .then(user => {
            bcrypt.compare(password,user.password)
                .then(passwordcheck => {
                    if(!passwordcheck){
                      return res.status(401).json('invalid email or password.' + user)
                    }
                    // create jwt token
                    const token = jwt.sign({
                        userId : user._id,
                        username: user.username,
                    },env.JWT_SECRET,{expiresIn : "24h"}
                    )
                    return res.status(200).send({
                        msg: "login successful...!",
                        username: user.username,
                        token
                    })
                })
           
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
}
export async function getblog(req,res,next){
//    const allPost = await postModel.find({}).populate({path: 'author', model: 'User', select:'username'})
    const allPost = await postModel.find().populate('author',['username']).sort({createdAt: -1}).limit(13)


        console.log(allPost)

//    console.log(postModel.populated('author'))
//    console.log(allPost.author)
//    console.log('all post :- ' + allPost)
//    res.json(allPost)
    res.json(allPost)
}
export async function postblog(req,res,next){
    const {title,summary,content} = req.body;
    const token = req.headers.authorization;

    console.log(req.headers.authorization)
    const {originalname, path} = req.file;
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)

    await jwt.verify(token,env.JWT_SECRET,{},async (err,info)=>{
        if(err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        // console.log(`info :- ${info.username}`)
        const postDoc = new postModel({
            title,
            summary,
            content,
            cover:newPath,
            author: info.userId
             
        })
        // console.log("username " + postDoc.author.username)
        const result =  postDoc.save();
        // console.log(result)
        res.json(result)
    })

       
    

    // res.json(`title : ${title}, summary:  ${summary}, content: ${content}`)
    // res.json({files: req.file})
   

}
export async function blogpage(req,res,next){
    const {id} = req.params;
    const postDoc = await postModel.findById(id).populate('author',['username']);
    res.json(postDoc);
    
}
export async function editblog(req,res,next){
    res.json('editblog in this page')
}
export async function deleteblog(req,res,next){
    res.json('deleteblog in this page')
}