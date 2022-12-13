import { DataTypes } from 'sequelize'// Sirve para asignar el tipo de dato a la base de datos
import { sequelize } from '../database/database.js'
import { Task } from './Task.js'

// Creamos las variables de la tabla
export const Project = sequelize.define('project', {
    id_project: {
      type: DataTypes.INTEGER, // tipo de dato
      autoIncrement: true, // Para incrementar el contador del id
      primaryKey: true // Si es llave primaria
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false // Si el registro puede o no estar vacio
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descrition: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }) 

Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id_project'
})

Task.belongsTo(Project,{
    foreignKey: 'projectId',
    target: 'id_project'
})