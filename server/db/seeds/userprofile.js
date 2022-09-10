exports.seed = function (knex) {
  return knex('userprofile')
    .del()
    .then(function () {
      return knex('userprofile').insert([
        {
          id: 1,
          name: '',
          weight: '',
          height: '',
          health_goals: '',
          email: '',
        },
      ])
    })
}
