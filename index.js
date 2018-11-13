const _ = require('lodash')
const express = require('express')
const request = require('request')
const serverless = require('serverless-http')
const app = express()

app.get('/', (req, res) => {
  request('https://data-asg.goldprice.org/dbXRates/USD,EUR', function (error, response, body) {
    const json = JSON.parse(body)
    //const price = _.get(json, 'items[0].curr')
    //const itemsvalue = .find(({ curr }) => curr === 'EUR')
    const { items } = await response.json()
    const euro = items.find(({ curr }) => curr === 'EUR')
    const dollar = items.find(({ curr }) => curr === 'USD')
    
    res.send(200, price)
    //res.send(200, price) was undefined by npm start and was changed
    console.log(euro, dollar)
    })
})



module.exports.handler = serverless(app)