const { Router } = require('express')
const UsuarioController = require('../controllers/usuarioController')

// abaixo uso do ROuter para criar as instancias
const router = Router()

router
    .post('/usuarios', UsuarioController.cadastrar)
    .get('/usuarios')
    .get('/usuarios/id/:id')
    .put('/usuarios/id/:id')
    .delete('/usuarios/id/:id')

module.exports = router