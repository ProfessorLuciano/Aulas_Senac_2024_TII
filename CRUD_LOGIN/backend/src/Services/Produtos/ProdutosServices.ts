import prismaClient from '../../Prisma'

interface CadProdutos {
    nome: string
    preco: string
    altura: string
    largura: string
    comprimento: string
    peso: string
    banner: string
}

class ProdutosServices {
    async cadastrarProdutos({nome, preco, altura, largura, comprimento, peso, banner}: CadProdutos){
        await prismaClient.produtos.create({
            data: {
                nome: nome,
                preco: preco,
                altura: altura,
                largura: largura,
                comprimento: comprimento,
                peso: peso,
                banner: banner
            }
        })
        return ({dados: 'Produto Cadastrado com Sucesso'})
    }

    async consultarProdutos(){
        const resposta = await prismaClient.produtos.findMany()
        return resposta        
    }

}

export { ProdutosServices }
