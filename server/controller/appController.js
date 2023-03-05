import userModel from '../model/userSchema.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import env from '../config.js'


export async function register(req,res,next){
    const {email, password} = req.body;

    if(password){
      bcrypt.hash(password,10)
        .then(hashedpassword => {
            const newUser = new userModel({
                email : email,
                password: hashedpassword,
            });
            newUser.save()
                .then(()=> res.status(201).json('user added'))
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
    res.json('getblog in this page')
}
export async function postblog(req,res,next){
    res.json('postblog in this page')
}
export async function editblog(req,res,next){
    res.json('editblog in this page')
}
export async function deleteblog(req,res,next){
    res.json('deleteblog in this page')
}