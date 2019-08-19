const express = require('express')
const router = express.Router()
const Client = require('../models/Client')

router.get('/allClients', (req, res) => {
    Client.find({}, (err, allClients) => { res.send(allClients) })
})

router.post('/newclient', (req, res) => {
    const newclient = new Client(req.body)
    newclient.save()
    res.end()
})

router.put("/client/:clientID", (req,res) => {
    const ID = req.params.clientID
    const info = req.body
    Client.findOneAndUpdate({ _id: ID }, { name: info.name, country: info.country }, (err, body) => { res.end() })
})

router.put('/updateClient/:firstName/:lastName', (req,res) => {
    const first = req.params.firstName
    const last = req.params.lastName
    Client.findOneAndUpdate({ name: `${first} ${last}` }, req.body, (err,client) => { res.end() })
})

module.exports = router


// --------------------***DUMMY DATA***--------------------
// const data = require("../../data")

// data.forEach(d => {
//     const newClient = new Client ({
//         name: d.name,
//         email: d.email,
//         firstContact: d.firstContact,
//         emailType: d.emailType,
//         sold: d.sold,
//         owner: d.owner,
//         country: d.country
//     })
//     newClient.save()
// })