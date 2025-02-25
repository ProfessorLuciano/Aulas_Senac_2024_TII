import { Request, Response } from 'express'

import { ClientesServices } from '../../Services/Clientes/ClientesServices'



class ClientesController {
    async cadastrarClientes(req: Request, res: Response) {
        const {
            nome,
            cpf,
            email,
            password,
            cep, rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado } = req.body

        const enviarDadosServices = new ClientesServices()
        const resposta = await enviarDadosServices.cadastrarClientes({
            nome,
            cpf,
            email,
            password,
            cep, 
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })
        return res.json(resposta)
    }
}

export { ClientesController }