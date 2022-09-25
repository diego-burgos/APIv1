import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { where } from 'sequelize';

const getUsers = async (req, res) => {
    try{
        const users = await User.findAll()
        if(users.length > 0){
            res.json({
                message: "Lista de Usuarios",
                data: users
            })
        }else{
            res.json({
                message: "No se encontraron Usuarios",
                data: []
            })
        }
    }catch(e){
        res.json({
            message :e.errors[0].message,
            tipo: e.errors[0].type
        })
    }
}
const createUser = async(req, res) => {

    const { email, username, password } = req.body;

    if(!email || !username ||!password){
        res.json({
            message: "Campos incompletos"
        })
    }
    try{
        const createUser = await User.create({email, username, password:bcrypt.hashSync(password , 10)})
        if(createUser){
            res.json({
                message: "Usuario creado exitosamente",
                createUser
            })
        }
    }catch(e){
        res.json({
            message :e.errors[0].message,
            tipo: e.errors[0].type
        })
    };
}
const deleteUser =  async (req, res) => {
    const { id } = req.params
    try {
        await User.destroy({where: { id }})
        res.json({
            message: "Usuario eliminado exitosamente"
        })
    }catch(e){
        res.json({
            message: e.errors[0].message,
            tipo : e.errors[0].type
        })
    }
}
const updateUser = async (req, res) => {
    const { email, password , username} = req.body
    const { id} = req.params
    try{
        const user = await User.update({ email, password, username }, { where:{ id} })
    }catch(e){
        res.json({
            message: e.errors[0].message,
            tipo: e.errors[0].type
        })
    }
}
const getUserById = async (req, res) =>{
    const { id } = req.params
    try{
        const user = await User.findOne({where:{ id }})
        res.json({
            message: "Usuario encontrado",
            user
        })
    }catch(e){
        res.json({
            message: e.errors[0].message,
            tipo: e.errors[0].type
        })
    }
}


const userLogin = async (req, res) => {
    const { email, password } = req.body
    try{
        const userLogin = await User.findOne({where :{ email}})
        const privateKey= 'fake123';

        if(!userLogin){
            res.json({
                message: "Usuario no encontrado"
            })
        }
        if(bcrypt.compareSync(password, userLogin.password)){
            const token = jwt.sign({user: userLogin.username},privateKey,{expiresIn: '10days'});
            res.json({
                message: "Bienvenido "+ userLogin.username,
                token: token
            })
        }else{
            res.json({
                message: "Contraseña incorrecta"
            })
        }
    }catch(e){
        res.json({
            message: e.errors[0].message,
            tipo: e.errors[0].type
        })
    }
}
export const userController = {
    getUsers,
    createUser,
    updateUser,
    getUserById,
    deleteUser,
    userLogin
}