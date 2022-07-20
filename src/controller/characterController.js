import characterModel from '../model/characterModel.js'

export async function getAll (req, res) {
  const character = await characterModel.find()

  res.status(200).send(character)
}

export async function getById (req, res) {
  const { id } = req.params
  const character = await characterModel.findById(id)

  res.status(200).send(character)
}

export async function getByName (req, res) {
  const { name } = req.body
  const character = await characterModel.findOne({ name })

  res.status(200).send(character)
}

export async function create (req, res) {
  const message = req.body
  await characterModel.create(message)

  res.status(201).send('Criado com sucesso')
}

export async function edit (req, res) {
  const { id } = req.params
  const message = req.body
  const character = await characterModel.findByIdAndUpdate(id, message)

  if (character) {
    const edited = await characterModel.findById(id)
    res.status(200).send(edited)
  }
}

export async function deletar (req, res) {
  const { id } = req.params
  const deletado = await characterModel.findById(id)
  await characterModel.findByIdAndDelete(id)

  res.status(200).json({
    message: 'O item abaixo foi deletado com sucesso',
    deletado
  })
}
