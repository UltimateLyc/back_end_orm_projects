import Sequelize  from 'sequelize'

// Inicio de la ORM
export const sequelize = new Sequelize(
    'projectSdb', // Nombre de la base de datos
    'postgres', // Programa de la BD
    'root', // Contraseña de la base de datos
    {
      host: 'localhost',
      dialect: 'postgres' // Lenguaje
    }
  )
