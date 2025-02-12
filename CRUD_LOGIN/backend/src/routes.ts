import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

//Importação dos Controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'
import { LoginUsuariosControllers } from './Controllers/Login/LoginUsuariosControllers'
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers'

import { estaAutenticado } from './middleware/estaAutenticado'
const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//Criação das Rotas de End Point
//Rotas de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.get('/ConsultarUsuarios', estaAutenticado, new UsuariosControllers().consultarUsuarios)
router.post('/ConsultarUsuariosUnico', estaAutenticado, new UsuariosControllers().consultarUsuariosUnico)
router.put('/AlterarDadosUsuarios', estaAutenticado, new UsuariosControllers().alterarDadosUsuarios)
router.delete('/ApagarUsuario/:id', estaAutenticado, new UsuariosControllers().apagarUsuarios)

//Rotas de Grupos
router.post('/CadastrarGrupos', estaAutenticado, new GruposControllers().cadastrarGrupos)
router.get('/ListarGrupos', new GruposControllers().listarGrupos)

//Rotas de Login
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken)

//Rotas de Produtos
router.post('/CadastrarProdutos', upload.single('file'), new ProdutosControllers().cadastrarProdutos)



export default router