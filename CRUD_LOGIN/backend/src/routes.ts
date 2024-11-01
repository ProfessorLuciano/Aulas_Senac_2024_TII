import { Router } from 'express'

//Importação dos Controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'

const router = Router()

//Criação das Rotas de End Point
//Rotas de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios)

//Rotas de Grupos
router.post('/CadastrarGrupos', new GruposControllers().cadastrarGrupos)


export default router