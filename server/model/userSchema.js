import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide unique email"],
        unique: [true, "account already exist"],
        match: [
          /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/,
          "please enter a valid email address",
        ],
      },
      password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
      }
})

export default mongoose.model('User',userSchema);