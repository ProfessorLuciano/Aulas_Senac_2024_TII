import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
}

export function estaAutenticado(
    req: Request,
    res: Response,
    next: NextFunction
){
    const autToken = req.headers.authorization
    if(!autToken){
        return res.json({dados: 'Token Inválido'})
    }
    

}