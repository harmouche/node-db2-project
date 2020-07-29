const express = require('express');
const knex = require('knex');

const db = require("../data/db-config");


const router = express.Router();

router.get('/', (req, res) => {
  db('cars-updated')
  .then(cars => {
    res.json(cars); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve cars' });
  });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    db('cars-updated').where({ id }).first()
    .then(car => {
      res.json(car);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve car' });
    });
  });
  
  router.post('/', (req, res) => {
    const carData = req.body;
    db('cars-updated').insert(carData)
    .then(ids => {
      db('cars-updated').where({ id: ids[0] })
      .then(newcarEntry => {
        res.status(201).json(newcarEntry);
      });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
  });


module.exports = router;