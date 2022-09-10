const express = require('express')

const router = express.Router()

router.use(express.json())
const axios = require('axios')

const options = {
  method: 'GET',
  url: 'https://bodybuilding-quotes1.p.rapidapi.com/random-quote',
  headers: {
    'X-RapidAPI-Key': '4d0643b609msh95f76e463f5ed06p1b3909jsnd9901e323c0e',
    'X-RapidAPI-Host': 'bodybuilding-quotes1.p.rapidapi.com',
  },
}
router.get('/', (req, res) => {
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })
})

module.exports = router
