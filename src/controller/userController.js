import userModel from '../model/userModel.js'

export async function GetUsers (req, res) {
  const user = await userModel.find()
  res.status(200).send(user)
}

export async function CreateUser (req, res) {
  const user = req.body
  const userEmail = await userModel.findOne({ email: user.email })
  const userNome = await userModel.findOne({ username: user.nomeUser })
  if (userEmail || userNome) {
    return res.status(400).send('Email ou usuário ja cadastrado')
  }
  await userModel.create(user)
  res.status(201).send('Usuário criado com sucesso')
}

export async function LoginUser (req, res) {
  const user = req.body
  await userModel.findOne({ email: user.email })
}
