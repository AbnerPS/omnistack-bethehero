const crypto = require('crypto') // lib do NODE para criptografia
const connect = require('../database/connection')

module.exports = {

    async index(request, response) {
        const ongs = await connect('ongs').select('*')
    
        return response.json(ongs)
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body
        const id = crypto.randomBytes(4).toString('HEX') // gera uma string de 4 digitos e converte para hexadecimal

        await connect('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id })
    }
}