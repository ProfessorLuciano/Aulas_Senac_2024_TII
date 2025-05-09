import prismaClient from '../../Prisma'


interface CriarPedidos{
    id_cliente: string
    id_produto: string
    valor: number
}

interface AdicionarItensPedidos{
    id_produto: string
    id_carrinho: string
    valor: number
}

class PedidosServices{
    async criarPedidos({id_cliente, id_produto, valor}: CriarPedidos){

        const pedidoAberto = await prismaClient.carrinho.findFirst({
            where: {
                id_cliente: id_cliente,
            }
        })

        if(pedidoAberto){
            throw new Error ('Existe Pedido Em Aberto')
        }

        const resposta = await prismaClient.carrinho.create({
            data:{
                id_cliente: id_cliente,
            }
        })

        await prismaClient.itemsCarrinho.create({
            data: {
                id_carrinho: resposta.id,
                id_produto: id_produto,
                valor: valor
            }
        })
        return resposta
    }

    async adcionarItensPedido({id_produto, id_carrinho, valor}: AdicionarItensPedidos){
        const produtoExiste = await prismaClient.itemsCarrinho.findFirst({
            where: {
                id_produto: id_produto
            }
        })

        if(produtoExiste){
            throw new Error('Produto Já Adicionado no Carrinho')
        }
        
        await prismaClient.itemsCarrinho.create({
            data: {
                id_produto: id_produto,
                id_carrinho: id_carrinho,
                valor: valor
            }
        })
        return({dados: 'Item Adicionado Com Sucesso'})
    }

    async buscarPedidosCliente(id: string){
        const resposta = await prismaClient.carrinho.findMany({
            where: {
                id_cliente: id
            }, orderBy: {
                n_pedido: 'asc'
            }
        })
        return resposta
    }

    async visualizaPedidoClienteUnico(id: string){
        const resposta = await prismaClient.carrinho.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                n_pedido: true,
                itens: {
                    select: {
                        quantidade: true,
                        valor: true,
                        produtos: {
                            select: {
                                nome: true
                            }
                        }
                    }                    
                }                
            }
        })
        return resposta
    }

    async apagarCarrinho(id: string){ 
        await prismaClient.carrinho.delete({
            where: {
                id: id
            }
        })
        return ({dados: 'Pedido Apagado com Sucesso'})
    }
}

export {PedidosServices}