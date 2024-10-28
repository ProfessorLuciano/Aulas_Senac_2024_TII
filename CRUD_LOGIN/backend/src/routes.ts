import { Router } from 'express'

//Importações dos Controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'

const router = Router()

//Criarção das Rotas de End Point
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)

router.post('/CadastrarGrupos', new GruposControllers().cadastrarGrupos)


export default router