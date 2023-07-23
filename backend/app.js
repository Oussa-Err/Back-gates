const express = require('express')

const app = express('')

app.use((_req, res) => {
    res.json({ message: 'the request is successful!'})
})

module.export = app