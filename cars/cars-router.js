const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig.js');

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err})
    })
})

router.post('/', (req, res) => {
    const newCar = req.body;
    db('cars').insert(newCar)
    .then(i => {
        res.status(201).json('insert success!')
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;

