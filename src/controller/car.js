import mongoose from 'mongoose';
import { Router } from 'express';
import Car from '../model/car';
import Account from '../model/account';
import bodyParser from 'body-parser';
import passport from 'passport';

import { authenticate } from '../middleware/authMiddleware';

export default({ config, db }) => {
  let api = Router();

  // '/v1/car' - GET all food trucks
  api.get('/', (req, res) => {
    Car.find({}, (err, car) => {
      if (err) {
        res.send(err);
      }
      res.json(car);
    });
  });

  // '/v1/car/:id' - GET a specific food truck
  api.get('/:id', (req, res) => {
    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }
      res.json(foodtruck);
    });
  });

  // '/v1/car/add' - POST - add a food truck
  api.post('/add', authenticate, (req, res) => {
    let newCar = new Car();
    newCar.car = req.body.car;
    newCar.model = req.body.model;
    newCar.price = req.body.price;
    newCar.lastprice = req.body.lastprice;

    newCar.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Car created successfully' });
    });
  });

  // '/v1/car/:id' - DELETE - remove a food truck
  api.delete('/:id', authenticate, (req, res) => {
    Car.findById(req.params.id, (err, car) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      if (car === null) {
        res.status(404).send("Car Not Found")
        return;
      }
      Car.remove({
        _id: req.params.id
      }, (err, car) => {
        if (err) {
          res.status(500).send(err);
          return;
        }res.json({message: "Car Successfully Removed"});
        });
      });
    });

  // '/v1/car/:id' - PUT - update an existing record
  api.put('/:id', authenticate, (req, res) => {
    Car.findById(req.params.id, (err, car) => {
      if (err) {
        res.send(err);
      }
      car.car = req.body.car;
      car.model = req.body.model;
      car.price = req.body.price;
      car.lastprice = req.body.lastprice;
      car.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Car info updated' });
      });
    });
  });

  return api;
}
