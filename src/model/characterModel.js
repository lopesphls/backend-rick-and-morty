import mongoose from 'mongoose'

const characterSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  imagem: { type: String, required: true }
}, {
  timestamps: true
})

const characterModel = mongoose.model('character', characterSchema, 'character')

export default characterModel
