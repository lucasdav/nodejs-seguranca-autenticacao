const database = require('../models')
const { hash } = require('bcryptjs')
const uuid = require('uuid')

class UsuarioService {
    async cadastrar(dto) {
        const usuario = await database.usuarios.findOne({
            where: {
                email: dto.email
            }
        })
        if (usuario) {
            throw new Error('Usuario já cadastrado')
        }

        try {
            // criptografando a senha usando a biblioteca bcryptjs, abaixo passando segundo parametro 8 saltos para criptografar
            const senhaHash = await hash(dto.senha, 8)
    
            const novoUsuario = await database.usuarios.create({
                id: uuid.v4(),
                nome: dto.nome,
                email: dto.email,
                senha: senhaHash
            })

            return novoUsuario
            
        } catch (error) {
            throw new Error('Erro ao cadastrar usuario')
        }


        
    }
}

module.exports = UsuarioService