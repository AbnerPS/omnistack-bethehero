const knex = require('knex')
const config = require('../../knexfile')

const connect = knex(config.development)

module.exports = connect