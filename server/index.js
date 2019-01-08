import '@babel/polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import config from './config'
import routes from './main'

const production = process.env.NODE_ENV === 'production' ;
const app = express()
const port = config.port

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const parseForm = bodyParser.urlencoded({ extended: false })
app.use('/', parseForm, routes)

app.set('port', port)
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → on PORT ${server.address().port} in ${production ? 'Production' : 'Development' } mode`)
})

module.exports = app