const request = require('supertest')
const app = require('../../src/app')
const connect = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await  connect.migrate.rollback()
       await  connect.migrate.latest()
    })

    afterAll(async () => {
        await connect.destroy()
    })

    it('Deve ser capaz de criar uma nova ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "GreenCoope",
            email: "contato@greencoope.com.br",
            whatsapp: "11954483316",
            city: "São Paulo",
            uf: "SP"
        })

        expect(response.body).toHaveProperty('id') // espera q tenha uma propriedade "id"
        expect(response.body.id).toHaveLength(8) // espera q a propriedade "id" tenha tamanho 8
    })
})