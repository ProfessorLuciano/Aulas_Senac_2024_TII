import { Request, Response } from 'express'
import { GruposServices } from '../../Services/Grupos/GruposServices'

class GruposControllers{
    async cadastrarGrupos(req: Request, res: Response){
        const { nome } = req.body
        const enviarDadosServices = new GruposServices()
        const resposta = await enviarDadosServices.cadastrarGrupos({
            nome
        })
        return res.json(resposta)
    }
    
    async listarGrupos(req: Request, res: Response){
        const enviarDadosServices = new GruposServices()
        const resposta = await enviarDadosServices.listarGrupos()
        return res.json(resposta)
    }
}

export { GruposControllers}