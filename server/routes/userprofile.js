const express = require('express')
const db = require('../db/userprofile')
const router = express.Router()

router.get('/userinfo', (req, res) => {
  db.getUserProfile()
    .then((profile) => {
      res.json(profile)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/userinfo', (req, res) => {
  const { name, weight, height, health_goals, email, age, gender } = req.body
  db.addUserProfile(name, weight, height, health_goals, email, age, gender)
    .then((results) => {
      console.log(results)
      res.json({ userprofile: results })
      console.log(res.json)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).send('Server error')
    })
})

module.exports = router
