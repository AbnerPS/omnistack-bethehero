const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Gera um ID único', () => {
    it('Deve gerar um ID único', () => {
        const id = generateUniqueId()
        
        expect(id).toHaveLength(8)
    })
})