import express from 'express'
import router from './routes/projects.routes.js' // importamos las rutas 

const app = express() // manda llamar a ejecutar express para crear el server
app.use(express.json()) // Nos permite recibir informacion atravez de archivos JSON
app.use(router) // nos permite usar las rutas


export default app
