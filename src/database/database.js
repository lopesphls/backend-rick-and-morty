import mongoose from 'mongoose'

const connection = async () => {
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Conexão estabelecida'))
    .catch((err) => console.error(err))
}

export default connection
