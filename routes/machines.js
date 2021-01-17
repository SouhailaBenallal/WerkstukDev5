import express from 'express'

import{getMachines, createMachine,getMachine,deleteMachine,updateMachine} from '../controllers/machine.js'

const router = express.Router();
//all routes in here are starting with /users
router.get('/', getMachines)
router.post('/', createMachine)
router.get('/:id', getMachine)
router.delete('/:id', deleteMachine)
router.patch('/:id', updateMachine)

export default router