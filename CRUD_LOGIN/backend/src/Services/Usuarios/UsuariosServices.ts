import prismaClient from '../../Prisma'

interface cadUsuarios {
    nome: string,
    email: string,
    password: string
}

class UsuariosServices {
    async cadastrarUsuarios({nome, email,password}: cadUsuarios){
        await prismaClient.cadastarUsuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: password
            }
        })
        return ({dados: 'Cadastro Efetuado Com Sucesso'})
    }

    async consultarUsuarios(){
        const resposta = await prismaClient.cadastarUsuarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return resposta
    }
}

export { UsuariosServices }