const _ = require('lodash')
const express = require('express')
const request = require('request')
const serverless = require('serverless-http')
const app = express()

app.get('/', (req, res) => {
  request('https://data-asg.goldprice.org/dbXRates/USD,EUR', function (error, response, body) {
    const json = JSON.parse(body)
    const price = _.get(json, 'items[0].curr')
    //const euro = items.find(({ curr }) => curr === 'EUR')
    const choose = _.find(items, function() {
        if ({curr: "EUR"}) {
            return this
        } else if ({curr: "USD"}) {
            return this
        }
    })

    res.send(200, price)
    console.log(choose)
    })
})



module.exports.handler = serverless(app)