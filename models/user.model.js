import { Model, DataTypes } from 'sequelize';
import sequelize from '../config.js'

export const User = sequelize.define('User',{
    email:{
        type: DataTypes.STRING,
        unique:{
            args: true,
            msg: "El correo debe ser unico",
        },
        allowNull: false,
        validate:{
            isEmail: {
                args: true,
                msg:'Ingrese un correo válido',
            },
            min:{
                args: 10,
                msg:'El correo debe tener como minimo 10 caracteres',
            }
        }
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isAlpha:{
                args: true,
                msg:'El nombre de usuario solamente puede tener letras',
            },
            min:{
                args: 5,
                msg:'El nombre de usuario debe tener como minimo 5 caracteres',
            }
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:{
                args: 6,
                msg:'La contraseña debe tener como minimo 6 caracteres',
            }
        }
    }
})