const _ = require('lodash')
const express = require('express')
const request = require('request')
const serverless = require('serverless-http')
const app = express()

app.get('/', (req, res) => {
  request('https://data-asg.goldprice.org/dbXRates/USD,EUR', function (error, response, body) {
    const json = JSON.parse(body)
    const price = _.get(json, 'items[0].curr')
    const itemsvalue = _.find('items[0]', function(o) {
        return o.curr
    })

    console.log(itemsvalue)
    res.send(200, price)
    //res.send(200, price) was undefined by npm start and changed
    })
})



module.exports.handler = serverless(app)
