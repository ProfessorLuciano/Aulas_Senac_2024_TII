import { Request, Response } from 'express'
import { ProdutosServices } from '../../Services/Produtos/ProdutosServices'


class ProdutosControllers {
    async cadastrarProdutos(req: Request, res: Response) {
        const { nome, preco, altura, largura, comprimento, peso } = req.body
        if(!req.file){
            throw new Error('Imagem com problemas')
        }else{
            const { originalname, filename: banner} = req.file
            const enviaDadosServices = new ProdutosServices()
            const resposta = await enviaDadosServices.cadastrarProdutos({
                nome,
                preco,
                altura,
                largura,
                comprimento,
                peso,
                banner
            })
            return res.json(resposta)            
        }
    }
    
    async consultarProdutos(req: Request, res: Response){
        const enviaDadosServices = new ProdutosServices()
        const resposta = await enviaDadosServices.consultarProdutos()
        return res.json(resposta)
    }
}

export { ProdutosControllers }