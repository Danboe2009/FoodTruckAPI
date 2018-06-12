'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _car = require('../model/car');

var _car2 = _interopRequireDefault(_car);

var _account = require('../model/account');

var _account2 = _interopRequireDefault(_account);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _authMiddleware = require('../middleware/authMiddleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  // '/v1/car' - GET all food trucks
  api.get('/', function (req, res) {
    _car2.default.find({}, function (err, car) {
      if (err) {
        res.send(err);
      }
      res.json(car);
    });
  });

  // '/v1/car/:id' - GET a specific food truck
  api.get('/:id', function (req, res) {
    FoodTruck.findById(req.params.id, function (err, foodtruck) {
      if (err) {
        res.send(err);
      }
      res.json(foodtruck);
    });
  });

  // '/v1/car/add' - POST - add a food truck
  api.post('/add', _authMiddleware.authenticate, function (req, res) {
    var newCar = new _car2.default();
    newCar.car = req.body.car;
    newCar.model = req.body.model;
    newCar.price = req.body.price;
    newCar.lastprice = req.body.lastprice;

    newCar.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Car created successfully' });
    });
  });

  // '/v1/car/:id' - DELETE - remove a food truck
  api.delete('/:id', _authMiddleware.authenticate, function (req, res) {
    _car2.default.findById(req.params.id, function (err, car) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      if (car === null) {
        res.status(404).send("Car Not Found");
        return;
      }
      _car2.default.remove({
        _id: req.params.id
      }, function (err, car) {
        if (err) {
          res.status(500).send(err);
          return;
        }res.json({ message: "Car Successfully Removed" });
      });
    });
  });

  // '/v1/car/:id' - PUT - update an existing record
  api.put('/:id', _authMiddleware.authenticate, function (req, res) {
    _car2.default.findById(req.params.id, function (err, car) {
      if (err) {
        res.send(err);
      }
      car.car = req.body.car;
      car.model = req.body.model;
      car.price = req.body.price;
      car.lastprice = req.body.lastprice;
      car.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Car info updated' });
      });
    });
  });

  return api;
};
//# sourceMappingURL=car.js.map