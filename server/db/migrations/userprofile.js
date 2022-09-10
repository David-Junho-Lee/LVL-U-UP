exports.up = function (knex) {
  return knex.schema.createTable('userprofile', (table) => {
    table.increments('id')
    table.string('name')
    table.int('height')
    table.int('weight')
    table.string('health_goals')
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('userprofile')
}
