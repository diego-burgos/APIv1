import { Model, DataTypes } from 'sequelize';
import sequelize from '../config.js'

export const Persona = sequelize.define('Persona',{
    dni:{
        type: DataTypes.STRING,
        validate:{
            isNumeric:{
                args: true,
                msg: 'Ingrese un dni valido'
            },
            len:{
                args: [8,8],
                msg: 'Longitud del dni invalido'
            }
        }
    },
    nombre:{
        type: DataTypes.STRING,
        validate:{
            isAlpha:{
                args: true,
                msg: 'Ingrese un nombre valido'
            }
        }
    },
    apellido_paterno:{
        type: DataTypes.STRING,
        validate:{
            isAlpha:{
                args: true,
                msg: 'Ingrese un apellido valido'
            }
        }
    },
    apellido_materno:{
        type: DataTypes.STRING,
        validate:{
            isAlpha:{
                args: true,
                msg: 'Ingrese un apellido valido'
            }
        }
    },
    telefono:{
        type: DataTypes.STRING,
        validate:{
            isNumeric:{
                args: true,
                msg: 'Ingrese un dni valido'
            }
        }
    },
    genero:{
        type: DataTypes.STRING,
        validate:{
            isAlpha:{
                args: true,
                msg: 'Ingrese un genero valido'
            }
        }
    },
    correo:{
        type: DataTypes.STRING,
        validate:{
            isEmail:{
                args: true,
                msg: 'Ingrese un correo valido'
            },
            min:{
                args: 10,
                msg: 'El correo debe tener como minimo 10 caracteres'
            }
        }
    },
})