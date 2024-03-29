const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/paytm')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowerCase: true,
    maxLength: 30,
    minLength: 5,
  },
  password: {
    type: String,
    required: true,

    minLength: 6,
  },
  firstname: {
    type: String,
    required: true,
    maxLength: 20,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
})
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.Objectid,
    ref: 'User',
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
})

const Account = mongoose.model('Account', accountSchema)
const User = mongoose.model('User', userSchema)
module.export = {
  User,
  Account,
}
