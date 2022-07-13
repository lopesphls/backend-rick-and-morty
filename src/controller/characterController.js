import characterModel from '../model/characterModel.js'

export async function getAll (req, res) {
  const character = await characterModel.find()

  res.send(character)
}

export async function getById (req, res) {
  const { id } = req.params
  const character = await characterModel.findById(id)

  res.send(character)
}

export async function create (req, res) {
  const message = req.body
  await characterModel.create(message)

  res.send('Criado com sucesso')
}

export async function edit (req, res) {
  const { id } = req.params
  const message = req.body
  const character = await characterModel.findByIdAndUpdate(id, message)

  if (character) {
    const edited = await characterModel.findById(id)
    res.send(edited)
  }
}

export async function deletar (req, res) {
  const { id } = req.params
  const deletado = await characterModel.findById(id)
  await characterModel.findByIdAndDelete(id)

  res.json({
    message: 'O item abaixo foi deletado com sucesso',
    deletado
  })
}
