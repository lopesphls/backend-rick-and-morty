import userModel from '../model/userModel'

export async function CreateUser (req, res) {
  const user = req.body
  await userModel.create(user)

  res.send('Usuário criado com sucesso')
}

export async function LoginUser (req, res) {
  await userModel.findOne(email).select('pass')
}
