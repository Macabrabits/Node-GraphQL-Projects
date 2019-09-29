const { usuarios, proximoId } = require('../data/db')

module.exports = {
    // { nome, email, idade }
    novoUsuario(_, args ){
        const emailExistente = usuarios
            .some(u => u.email === args.email)

        if(emailExistente)
            throw new Error('E-mail cadastrado')


        const novo = {
            id: proximoId(),
            ...args,
            perfil_id: 1,
            status: 'ATIVO',
        }

        usuarios.push(novo)
        return novo
    },

    excluirUsuario(_, { id }){
        const i = usuarios.findIndex(f => f.id === id)
        if(i < 0) return null
        let excluido = usuarios.splice(i, 1)
        return excluido ? excluido[0] : null
    },

    alterarUsuario(_, args) {
        const i = usuarios.findIndex(f => f.id === args.id)
        if(i < 0) return null

        const usuario = {
            ...usuarios[i],
            ...args
        }

        usuarios.splice(i, 1, usuario)
        return usuarios[i]
    }
}