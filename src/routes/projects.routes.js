import { Router } from 'express'
import { getProjects } from '../controllers/projects.controller.js'

const router =  Router()

router.get('/projects', getProjects)
router.post('/projects',(req, res) => {console.log('Project POST')})
router.put('/projects')
router.delete('/projects')

export default router
