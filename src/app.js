import express from 'express'
import projectRoutes from './routes/projects.routes.js' // importamos las rutas 
import tasksRoutes from './routes/tasks.routes.js' // importamos las rutas 


const app = express() // manda llamar a ejecutar express para crear el server
app.use(express.json()) // Nos permite recibir informacion atravez de archivos JSON
app.use(projectRoutes) // nos permite usar las rutas
app.use(tasksRoutes)

export default app
