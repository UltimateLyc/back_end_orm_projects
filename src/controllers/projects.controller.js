import { Project } from '../models/Project.js'

export const getProjects = async (req, res) => {
    try {
        const response = await Project.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({'error': error.message})
    }
}

export const createProject = async (req, res) => {
    try {
        const {name, priority, descrition} = req.body
    } catch (error) {
        res.status(500).json({'error': error.message})
    }
}