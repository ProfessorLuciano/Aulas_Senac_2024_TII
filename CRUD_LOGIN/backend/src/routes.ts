import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

//Importação dos Controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { GruposControllers } from './Controllers/Grupos/GruposControllers'
import { LoginUsuariosControllers } from './Controllers/Login/LoginUsuariosControllers'
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers'
import { ClientesController } from './Controllers/Clientes/ClientesControllers'
import { LoginClientesControllers } from './Controllers/Login/LoginClientesControllers'
import { PedidosControllers } from './Controllers/Pedidos/PedidosControllers'

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
router.post('/CadastrarGrupos', new GruposControllers().cadastrarGrupos)
router.get('/ListarGrupos', new GruposControllers().listarGrupos)

//Rotas de Login
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken)
router.post('/LoginClientes', new LoginClientesControllers().loginClientes)
router.get('/VerificaTokenClientes', estaAutenticado, new LoginClientesControllers().verificaTokenClientes)

//Rotas de Produtos
router.post('/CadastrarProdutos', estaAutenticado, upload.single('file'), new ProdutosControllers().cadastrarProdutos)
router.get('/ConsultarProdutos', new ProdutosControllers().consultarProdutos)

//Rotas de Clientes
router.post('/CadastrarClientes', new ClientesController().cadastrarClientes)

//Rotas de Pedidos
router.post('/RealizarPedidos', new PedidosControllers().criarPedidos)
router.post('/AdicionarItensPedidos', new PedidosControllers().adcionarItensPedido)
router.get('/BuscarPedidosCliente', estaAutenticado, new PedidosControllers().buscarPedidosCliente)
router.delete('/ApagarCarrinho/:id', estaAutenticado, new PedidosControllers().apagarCarrinho)
router.post('/visualizaPedidoClienteUnico', estaAutenticado, new PedidosControllers().visualizaPedidoClienteUnico)

export default router