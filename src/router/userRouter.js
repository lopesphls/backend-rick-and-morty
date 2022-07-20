import { Router } from 'express'
import { CreateUser } from '../controller/userController.js'

const router = Router()

router.get('/users')
router.post('/users/create', CreateUser)
router.put('/character/:id')
router.delete('/character/deletar/:id')

export default router
