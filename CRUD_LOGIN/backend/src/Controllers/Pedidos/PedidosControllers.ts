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
        const { id_produto, id_carrinho, valor } = req.body
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.adcionarItensPedido({
            id_carrinho,
            id_produto,
            valor
        })
        return res.json(resposta)
    }

    async buscarPedidosCliente(req: Request, res: Response) {
        const id = req.usuarioId
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.buscarPedidosCliente(id)
        return res.json(resposta)
    }
    
    async visualizaPedidoClienteUnico(req: Request, res: Response){
        const {id} = req.body
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.visualizaPedidoClienteUnico(id)
        return res.json(resposta)
    }
    
    async apagarCarrinho(req: Request, res: Response) {
        const { id } = req.params
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.apagarCarrinho(id)
        return res.json(resposta)
    }

}

export { PedidosControllers }