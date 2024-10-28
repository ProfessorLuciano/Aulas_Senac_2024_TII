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

}

export { UsuariosServices }