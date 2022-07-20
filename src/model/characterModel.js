import mongoose from 'mongoose'

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true }
}, {
  timestamps: true
})

const characterModel = mongoose.model('character', characterSchema, 'character')

export default characterModel
