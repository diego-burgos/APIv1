import jwt from 'jsonwebtoken';

const privateKey= 'fake123';

export const verifiToken = async (req, res, next) => {
    let token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            message: 'No autorizado'
        })
    }
    try{
        token = token.split(' ')[1];
        const verificarToken = jwt.verify(token, privateKey);
        next()
    }catch(e){
        res.json({message: 'Error al verificar token '+e, error: e});
    }
}