import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  nomeUser: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  pass: { type: String, required: true, select: false },
  foto: { type: String, required: true }
}, {
  timestamps: true
})

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const userModel = mongoose.model('user', userSchema, 'user')

export default userModel
