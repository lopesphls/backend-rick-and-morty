import characterModel from '../model/characterModel'

export async function getAll (req, res) {
  const toDo = await characterModel.find()

  res.send(toDo)
}

export async function getById (req, res) {
  const { id } = req.params
  const toDo = await characterModel.findById(id)

  res.send(toDo)
}

export async function create (req, res) {
  const message = req.body
  await characterModel.create(message)

  res.send('Criado com sucesso')
}

export async function edit (req, res) {
  const { id } = req.params
  const message = req.body
  const toDo = await characterModel.findByIdAndUpdate(id, message)

  if (toDo) {
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
