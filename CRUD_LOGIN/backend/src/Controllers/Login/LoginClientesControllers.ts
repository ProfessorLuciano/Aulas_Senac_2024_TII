import { Request, Response } from 'express'
import { LoginClientesServices } from '../../Services/Login/LoginClientesServices'


class LoginClientesControllers {
    async loginClientes(req: Request, res: Response) {
        const { cpf, password } = req.body
        const enviarDadosServices = new LoginClientesServices()
        const resposta = await enviarDadosServices.loginClientes({
            cpf, password
        })
        return res.json(resposta)        
    }
    
    async verificaTokenClientes(req: Request, res: Response){
        const id = req.usuarioId
        const enviarDadosServices = new LoginClientesServices()
        const resposta = await enviarDadosServices.verificaTokenCliente(id)
        return res.json(resposta)        
    }

}

export { LoginClientesControllers }