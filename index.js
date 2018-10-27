const _ = require('lodash')
const express = require('express')
const request = require('request')
const serverless = require('serverless-http')
const app = express()

app.get('/', (req, res) => {
  request('https://data-asg.goldprice.org/dbXRates/USD,EUR', function (error, response, body) {
    const json = JSON.parse(body)
    const price = _.get(json, 'items[0].curr')
    const itemsvalue = _.get(json, 'items', ['0', '1']);

    console.log(itemsvalue)
    res.send(200, price)
    })
})



module.exports.handler = serverless(app)
