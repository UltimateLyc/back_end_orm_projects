import { Project } from '../models/Project.js'
import { Task } from '../models/Task.js'

// creacion de consulta de base de dartos
export const getProjects = async (req, res) => {
    try {
        const response = await Project.findAll({include: Task}) // Con include es = a un JOIN
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({'error': error.message})
    }
}

// Creacion para el llenado de la base de datos
// Esto no nos excluye de usar los RegExp (expresiones regulares)
export const createProject = async (req, res) => {
    try {
        const {name, priority, descrition} = req.body

        const createProject = await Project.create({
            name,
            priority,
            descrition
        })
        res.status(200).json(createProject)
    } catch (error) {
        res.status(500).json({'error': error.message})
    }
}

// Creamos para la modificacion de la base
export const updateProject = async (req, res) => {
    try {
        const {id} = req.params
        const {name, priority, descrition} = req.body

        const project = await Project.findByPk(id) // findByPk busca en base al primaryKey

        project.name = name
        project.priority = priority
        project.descrition = descrition

        await project.save()

        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({'error': error.message})
    }
}

// Creacion para borrar datos de la base
export const deleteProject = async (req, res) => {
    try {
        const {id} = req.params
        const result = await Project.destroy({
            where: {id_project : id}
        })
        
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({'error': error.message})
    }
}