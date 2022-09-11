exports.up = function (knex) {
  return knex.schema.createTable('userprofile', (table) => {
    table.increments('id')
    table.string('name')
    table.int('height')
    table.int('weight')
    table.string('health_goals')
    table.string('email')
    table.string('age')
    table.string('gender')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('userprofile')
}
