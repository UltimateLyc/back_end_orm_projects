import { Router } from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/tasks.controller.js'

const router =  Router()

router.get('/tasks',getTasks)
router.post('/tasks',createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

export default router