import { Router } from 'express'

//Importação dos Controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'

const router = Router()

//Criação das Rotas de End Point
//Rotas de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)
router.post('/ConsultarUsuariosUnico', new UsuariosControllers().consultarUsuariosUnico)
router.put('/AlterarDadosUsuarios', new UsuariosControllers().alterarDadosUsuarios)
router.delete('/ApagarUsuarios/:id', new UsuariosControllers().apagarUsuarios)

//Rotas de Grupos
router.post('/CadastrarGrupos', new GruposControllers().cadastrarGrupos)


export default router