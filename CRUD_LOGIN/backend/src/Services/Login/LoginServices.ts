import prismaClient from '../../Prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface Login {
    email: string,
    password: string
}

class LoginServices {
    async loginUsuarios({ email, password }: Login) {
        const usuario = await prismaClient.cadastarUsuarios.findFirst({
            where: {
                email: email
            }
        })
        if (!usuario) {
            throw new Error('Usuario ou Senha Incorretos')
        }
        const senhaCrypt = await compare(password, usuario.senha)
        if (!senhaCrypt) {
            throw new Error('Usuario ou Senha Incorretos')
        }

        const token = sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        },
            process.env.JWT_SECRETO,
            {
                subject: usuario.id,
                expiresIn: '8h'
            }
        )
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: token
        }
    }
}

export { LoginServices }