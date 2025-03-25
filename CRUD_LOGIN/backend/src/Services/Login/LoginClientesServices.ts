import prismaClient from '../../Prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface LoginClientes {
    cpf: string
    password: string
}

class LoginClientesServices {
    async loginClientes({ cpf, password }: LoginClientes) {
        const cpfExiste = await prismaClient.clientes.findFirst({
            where: {
                cpf: cpf
            }
        })
        if (!cpfExiste) {
            throw new Error('CPF ou Senha Incorretos')
        }

        const senhaCrypt = await compare(password, cpfExiste.password)
        if (!senhaCrypt) {
            throw new Error('Usuario ou Senha Incorretos')
        }

        const token = sign({
            id: cpfExiste.id,
            nome: cpfExiste.nome,
            email: cpfExiste.email
        },
            process.env.JWT_SECRETO,
            {
                subject: cpfExiste.id,
                expiresIn: '8h'
            }
        )
        return {
            id: cpfExiste.id,
            nome: cpfExiste.nome,
            email: cpfExiste.email,
            cliente: cpfExiste.cliente,
            token: token
        }

    }
    
    async verificaTokenCliente(id: string) {
        const resposta = await prismaClient.clientes.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true
            }
        })
        return resposta
    }
}

export { LoginClientesServices }