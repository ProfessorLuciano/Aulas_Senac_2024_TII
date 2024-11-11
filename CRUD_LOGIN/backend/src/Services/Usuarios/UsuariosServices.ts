import prismaClient from '../../Prisma'
import { hash } from 'bcryptjs'

interface cadUsuarios {
    nome: string,
    email: string,
    password: string
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, password }: cadUsuarios) {

        const senhaCrypt = await hash(password, 8)
        await prismaClient.cadastarUsuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt
            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }

    async consultarUsuarios() {
        const resposta = await prismaClient.cadastarUsuarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                idGrupos: true,
                grupos: {
                    select: {
                        nome: true
                    }
                }
            }
        })
        return resposta
    }

    async consultarUsuariosUnico(id: string) {
        const resposta = await prismaClient.cadastarUsuarios.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                senha: true
            }
        })
        return resposta
    }

    async apagarUsuarios(id: string) {
        await prismaClient.cadastarUsuarios.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    }
}

export { UsuariosServices }