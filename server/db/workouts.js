const connection = require('./connection')

function getWorkouts(db = connection) {
  return db('workouts').select()
}

module.exports = {
  getWorkouts,
}
