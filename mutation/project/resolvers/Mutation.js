const { usuarios, proximoId } = require('../data/db')

function indiceUsuario(filtro) {
    if(!filtro) return -1
    const { id, email } = filtro

    if(id)
        return usuarios.findIndex((f) => f.id === id)
    else if(email)
        return usuarios.findIndex((f) => f.email === email)

    return -1
}

module.exports = {
    // { nome, email, idade }
    novoUsuario(_, { dados } ){
        const emailExistente = usuarios
            .some(u => u.email === dados.email)

        if(emailExistente)
            throw new Error('E-mail cadastrado')


        const novo = {
            id: proximoId(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO',
        }

        usuarios.push(novo)
        return novo
    },

    excluirUsuario(_, { filtro }){
        const i = indiceUsuario(filtro)
        if(i < 0) return null
        let excluido = usuarios.splice(i, 1)
        return excluido ? excluido[0] : null
    },

    alterarUsuario(_, { filtro, dados } ) {
        const i = indiceUsuario(filtro)
        if(i < 0) return null
        const usuario = {
            ...usuarios[i],
            ...dados
        }
        usuarios.splice(i, 1, usuario)
        return usuarios[i]
    }
}