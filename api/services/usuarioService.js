const database = require('../models')

class UsuarioService {
    async cadastrar(dto) {
        const usuario = await database.usuario.findOne({
            where: {
                email: dto.email
            }
        })
        if (usuario) {
            throw new Error('Usuario já cadastrado')
        }
    }
}

module.exports = UsuarioService