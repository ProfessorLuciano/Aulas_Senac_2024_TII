import prismaClient from '../../Prisma'

interface CadGrupos {
    nome: string
}

class GruposServices {
    async cadastrarGrupos({ nome }: CadGrupos) {
        await prismaClient.cadastrarGrupos.create({
            data: {
                nome: nome
            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }
}

export { GruposServices }