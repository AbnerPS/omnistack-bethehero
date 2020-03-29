const crypto = require('crypto') // lib do NODE para criptografia

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX') // gera uma string de 4 digitos e converte para hexadecimal
}