exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments() // Chave primaria com auto-increment
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()
        table.string('ong_id').notNullable() // Chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs') // Referencia da chave estrangeira na tabela "ongs"
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};
