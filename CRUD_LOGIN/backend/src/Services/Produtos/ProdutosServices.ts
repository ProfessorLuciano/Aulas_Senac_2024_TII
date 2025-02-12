import prismaClient from '../../Prisma'

interface CadProdutos {
    nome: string
    preco: string
    banner: string
}

class ProdutosServices {
    async cadastrarProdutos({nome, preco, banner}: CadProdutos){
        await prismaClient.produtos.create({
            data: {
                nome: nome,
                preco: preco,
                banner: banner
            }
        })
        return ({dados: 'Produto Cadastrado com Sucesso'})
    }

}

export { ProdutosServices }
