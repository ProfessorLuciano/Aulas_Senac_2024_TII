import { Router } from 'express'

//Importação dos Controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'
import { LoginUsuariosControllers } from './Controllers/Login/LoginUsuariosControllers'

import { estaAutenticado } from './middleware/estaAutenticado'
const router = Router()

//Criação das Rotas de End Point
//Rotas de Usuarios
router.post('/CadastrarUsuarios', estaAutenticado, new UsuariosControllers().cadastrarUsuarios)
router.get('/ConsultarUsuarios', estaAutenticado, new UsuariosControllers().consultarUsuarios)
router.post('/ConsultarUsuariosUnico', estaAutenticado, new UsuariosControllers().consultarUsuariosUnico)
router.put('/AlterarDadosUsuarios', estaAutenticado, new UsuariosControllers().alterarDadosUsuarios)
router.delete('/ApagarUsuarios/:id', estaAutenticado, new UsuariosControllers().apagarUsuarios)

//Rotas de Grupos
router.post('/CadastrarGrupos', estaAutenticado, new GruposControllers().cadastrarGrupos)

//Roras de Login
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken)


export default router