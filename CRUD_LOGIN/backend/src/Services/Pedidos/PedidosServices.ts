import { ItemsCarrinho } from './../../../../../../Aulas_Senac_2024_TII/CRUD_LOGIN/backend/node_modules/.prisma/client/index.d';
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

    async visualizaPedidosClientesNumero(id: string){
        const resposta = await prismaClient.carrinho.findMany({
            where: {
                id_cliente: id
            },
            select: {
                id: true,
                n_pedido: true,
                status: true,
                valor_total: true,
                itens: {
                    select: {
                        quantidade: true,
                        valor: true,
                        produtos: {
                            select: {
                                nome: true,
                                preco: true,
                                altura: true,
                                largura: true,
                                comprimento: true,
                                peso: true
                            }
                        }
                    }
                },                    
                cliente: {
                    select: {
                        nome: true,
                        cpf: true,
                        cep: true,
                        rua: true,
                        numero: true,
                        complemento: true,
                        bairro: true,
                        cidade: true,
                        estado: true
                    }
                }
            }
        })
        return resposta
    }
}

export {PedidosServices}