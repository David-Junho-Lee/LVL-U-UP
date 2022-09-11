const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getUserProfile(db = connection) {
  return db('userprofile').select()
}

// add function

function addUserProfile(
  name,
  weight,
  height,
  health_goals,
  email,
  age,
  gender,
  db = connection
) {
  return db('userprofile').insert({
    name: name,
    weight: weight,
    height: height,
    health_goals: health_goals,
    email: email,
    age: age,
    gender: gender,
  })
}

module.exports = {
  getUserProfile,
  addUserProfile,
}
