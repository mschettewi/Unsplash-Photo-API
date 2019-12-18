const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getPhoto = (request, response) => {
    pool.query('SELECT * FROM photos ORDER BY random() LIMIT 1', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows[0])
  })
}

app
  .route('/photo')
  .get(getPhoto)

app.listen(process.env.PORT || 3002, () => {
  console.log('Server listening')
})