exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')
    table.string('name')
    table.string('experience')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user')
}
