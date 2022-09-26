import { Model, DataTypes } from 'sequelize';
import sequelize from '../config.js'

export const Persona = sequelize.define('Persona',{
    dni:{
        type: DataTypes.STRING
    },
    nombre:{
        type: DataTypes.STRING
    },
    apellido_paterno:{
        type: DataTypes.STRING
    },
    apellido_materno:{
        type: DataTypes.STRING
    },
    telefono:{
        type: DataTypes.STRING
    },
    genero:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
})