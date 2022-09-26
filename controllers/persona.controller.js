
import { Persona } from '../models/persona.model.js'

const getPersonas = async (req,res)=>{
    try{
        const personas = await Persona.findAll()
        res.json({
            message: "Lista de Personas",
            data: personas
        })
    }
    catch(e){
        res.json({
            message :e.errors[0].message,
            tipo: e.errors[0].type
        })
    }
}
const createPersona = async(req,res)=>{
    const { dni, nombre, apellido_paterno , apellido_materno, telefono, genero, correo} = req.body
    try{
        const createPersona = await Persona.create({ dni, nombre, apellido_paterno , apellido_materno, telefono, genero, correo})
        if(createPersona){
            res.json({
                message: "Persona creada exitosamente",
                createPersona
            })
        }
    }catch(e){
        res.json({
            message :e.errors[0].message,
            tipo: e.errors[0].type
        })
    }
}

const deletePersona = async(req, res)=>{
    const { id } = req.params
    try{
        await Persona.destroy({ where:{id}})
        res.json({
            message: "Persona eliminada exitosamente"
        })
    }catch(e){
        res.json({
            message :e.errors[0].message,
            tipo: e.errors[0].type
        })
    }
}

const updatePersona = async(req,res)=>{
    const { dni, nombre, apellido_paterno , apellido_materno, telefono, genero, correo} = req.body
    const { id }= req.params
    try{
        const persona = await Persona.update({ dni, nombre, apellido_paterno , apellido_materno, telefono, genero, correo},{where :{id}})
        res.json({
            message: "Persona actualizada correctamente",
            persona
        })
    }catch(e){
        res.json({
            message :e.errors[0].message,
            tipo: e.errors[0].type
        })
    }
}

const getPersonaById = async(req,res)=>{
    const { id } = req.params
    try{
        const persona = await Persona.findOne({where:{ id }})
        res.json({
             message: "Persona encontrada",
             persona
        })
    }catch(e){
        res.json({
            message: e.errors[0].message,
            tipo: e.errors[0].type
        })
    }
}
export const personaController = {
    getPersonas,
    createPersona,
    deletePersona,
    updatePersona,
    getPersonaById
}