const express = require('express')

const db = require('../db/workouts')

const router = express.Router()

router.get('/', (req, res) => {
  db.getWorkouts()
    .then((results) => {
      res.json({ workouts: results.map((workout) => workout) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
