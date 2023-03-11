import userModel from "../model/userSchema.js";
import postModel from "../model/postSchema.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import fs from "fs";
import cloudinary from 'cloudinary'

dotenv.config();
const jwtSecret = process.env.JWT_SECRET
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME ,
    api_key: process.env.CLOUDINARY_API_KEY ,
    api_secret: process.env.CLOUDINARY_API_SECRET, 
})

export async function register(req, res, next) {
  const { username, email, password } = req.body;

  if (password) {
    bcrypt
      .hash(password, 10)
      .then((hashedpassword) => {
        const newUser = new userModel({
          username,
          email: email,
          password: hashedpassword,
        });
        newUser
          .save()
          .then(() => res.status(201).json("user added " + username))
          .catch((err) => res.status(400).json(`error : ${err}`));
      })
      .catch((err) => console.log(err));
  }
}

export async function login(req, res, next) {
  const { email, password } = req.body;
  userModel
    .findOne({ email: email })
    .then((user) => {
      bcrypt.compare(password, user.password).then((passwordcheck) => {
        if (!passwordcheck) {
          return res.status(401).json("invalid email or password." + user);
        }
        // create jwt token
        const token = jwt.sign(
          {
            userId: user._id,
            username: user.username,
          },
          jwtSecret,
          { expiresIn: "24h" }
        );
        return res.status(200).send({
          msg: "login successful...!",
          username: user.username,
          token,
        });
      });
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
}
export async function profile(req, res, next) {
  const token = req.headers.authorization;
  await jwt.verify(token, jwtSecret, {}, async (err, info) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.json(info);
  });
}
export async function getblog(req, res, next) {
  const allPost = await postModel
    .find()
    .populate("author", ["username", "userId"])
    .sort({ createdAt: -1 })
    .limit(13);

  // console.log(`allPost :- ${allPost.author}`);
  res.json(allPost);
}
export async function postblog(req, res, next) {
  const { title, summary, content } = req.body;
  const {originalname, path} = req.file;
  const token = req.headers.authorization;
 
  try {
    const result = await cloudinary.uploader.upload(path, {folder: 'uploads' })
    console.log(result)
    await jwt.verify(token, jwtSecret, {}, async (err, info) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
    
    const postDoc = new postModel({
      title,
      summary,
      content,
      cover: {
        public_id: result.public_id,
        url: result.secure_url
      },
      author: info.userId,
    });
    // console.log(author)
    console.log(postDoc)
    const final = postDoc.save();
    res.json(final);
  })
  } catch (error) {
    console.log(`cloudinary error ${error}`)
    
  } 

}
export async function blogpage(req, res, next) {
  const { id } = req.params;
  const postDoc = await postModel.findById(id).populate("author",['username']);
  res.json(postDoc);
}
export async function editblog(req, res, next) {
    const { id,title, summary, content } = req.body;
    const token = req.headers.authorization;

    let newPath = null
  if (req.file) {
    const { originalname, path } = req.file;
     newPath = await cloudinary.uploader.upload(path, {folder: 'uploads' })
    
  }

await jwt.verify(token, jwtSecret, {}, async (err, info) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    
    const postDoc = await postModel.findById(id);

    const isAuthor = JSON.stringify(postDoc.author._id) === JSON.stringify(info.userId)
    if(!isAuthor){
        return res.status(400).json('you are not author')
    }
    await postDoc.updateOne({
        title,
        summary,
        content,
        cover: newPath ? {
          public_id: newPath.public_id,
          url: newPath.secure_url
        } : postDoc.cover,
    })
    res.json(postDoc)
  });
}
export async function deleteblog(req, res, next) {
  const {id} = req.params
  try {
  const post = await postModel.findByIdAndDelete(id);
  res.status(200).json({ message: 'Blog post deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting'})
  }
}
