import app from "./app.js"
import { sequelize } from './database/database.js'
import { Project } from './models/Project.js'
import { Task } from './models/Task.js'

async function main(){
    try {
        await sequelize.sync({ force: false }) // Sincroniza el codigo con lo que har en la base de datos // force:true sirve para que no se modifique la tabla ya creada
        await sequelize.authenticate() // Verrifica que nos podamos conectar a la bd
        console.log('Conexion a la base correcta')
        app.listen(3000)
        console.log('Server ON')
    } catch (error) {
        console.log(error)
    }
}

main()