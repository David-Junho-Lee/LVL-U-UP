const express = require('express')

const db = require('../db/user')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUser()
    .then((results) => {
      res.json({ users: results.map((user) => user.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
