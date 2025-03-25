import { Request, Response } from 'express'
import { PedidosServices } from '../../Services/Pedidos/PedidosServices'


class PedidosControllers {
    async criarPedidos(req: Request, res: Response) {
        const { id_cliente, id_produto, valor } = req.body
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.criarPedidos({
            id_cliente,
            id_produto,
            valor
        })
        return res.json(resposta)
    }

    async adcionarItensPedido(req: Request, res: Response) {
        const { id_produto, id_carrinho, valor  } = req.body
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.adcionarItensPedido({
            id_carrinho,
            id_produto,
            valor
        })
        return res.json(resposta)
    }
    
<<<<<<< HEAD
    async buscarPedidosCliente(req: Request, res: Response){
        const id = req.usuarioId
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.buscarPedidosCliente(id)
        return res.json(resposta)
=======
    async visualizaPedidosClientesNumero(req: Request, res: Response){
        const id = req.usuarioId
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.visualizaPedidosClientesNumero(id)
        return res.json(resposta)

>>>>>>> eea76d26348576a02e97baca48105a46a7ac91a5
    }
}

export { PedidosControllers }