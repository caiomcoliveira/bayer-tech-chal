const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

app.get('/api/farmers', (req, res) => {
    res.send([{
        address: {
            street: 'One street',
            state: 'Liquid State of Water',
            address: '7th H20 Av.',
            country: 'USA',
        },
        document: {
            documentNumber: '123123',
            documentType: 'F'
        },
        id: '1',
        name: 'Caio'

    }]);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})