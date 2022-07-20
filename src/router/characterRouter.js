import { Router } from 'express'
import { create, deletar, edit, getAll, getById, getByName } from '../controller/characterController.js'

const router = Router()

router.get('/characters', getAll)
router.get('/character/find/:id', getById)
router.get('/character/search', getByName)
router.post('/character/create', create)
router.put('/character/update/:id', edit)
router.delete('/character/delete/:id', deletar)

export default router
