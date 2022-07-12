import { Router } from 'express'
import {
  create,
  deletar,
  edit,
  getAll,
  getById
} from '../controllers/characterController.js'

const router = Router()

router.get('/character', getAll)
router.get('/character/:id', getById)
router.post('/character/criar', create)
router.put('/character/:id', edit)
router.delete('/character/deletar/:id', deletar)

export default router
