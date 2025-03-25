import prismaClient from '../../Prisma'
import { hash } from 'bcryptjs'

interface cadUsuarios {
    nome: string,
    email: string,
    password: string
    idGrupos: string
}

interface AlterarUsuarios {
    id: string,
    nome: string,
    email: string
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, password, idGrupos }: cadUsuarios) {

        const senhaCrypt = await hash(password, 8)
        await prismaClient.cadastrarUsuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt,
                idGrupos: idGrupos
            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }

    async consultarUsuarios() {
        const resposta = await prismaClient.cadastrarUsuarios.findMany({
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
        const resposta = await prismaClient.cadastrarUsuarios.findFirst({
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

    async alterarDadosUsuarios({ id, nome, email }: AlterarUsuarios) {
        await prismaClient.cadastrarUsuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email
            }
        })
        return ({ dados: 'Cadastro Alterado Com Sucesso' })
    }

    async apagarUsuarios(id: string) {
        await prismaClient.cadastrarUsuarios.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    }
}

export { UsuariosServices }