import mongoose from 'mongoose'

const connection = async () => {
  await mongoose.connect('mongodb+srv://lopesphls:1bxEbKOfjkwGk0ge@rickandmorty.dpqb2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Conexão estabelecida'))
    .catch((err) => console.error(err))
}

export default connection
