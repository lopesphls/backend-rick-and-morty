import { Router } from 'express'
import { CreateUser, GetUsers } from '../controller/userController.js'

const router = Router()

router.get('/users', GetUsers)
router.post('/users/create', CreateUser)

export default router
