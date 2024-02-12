const { Router } = require('express')

// abaixo uso do ROuter para criar as instancias
const router = Router()

router
    .post('/usuarios')
    .get('/usuarios')
    .get('/usuarios/id/:id')
    .put('/usuarios/id/:id')
    .delete('/usuarios/id/:id')

module.exports = router