'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _carAccount = require('../model/carAccount');

var _carAccount2 = _interopRequireDefault(_carAccount);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _authMiddleware = require('../middleware/authMiddleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  // '/v1/carAccount'
  api.get('/', function (req, res) {
    res.status(200).send({ user: req.user });
  });

  // '/v1/carAccount/getall' ** REMOVE AFTER DEV
  api.get('/getall', function (req, res) {
    _carAccount2.default.find({}, function (err, accounts) {
      if (err) {
        send(err);
      }
      res.json(accounts);
    });
  });

  // '/v1/carAccount/register'
  api.post('/register', function (req, res) {
    _carAccount2.default.register(new _carAccount2.default({ username: req.body.email }), req.body.password, function (err, account) {
      if (err) {
        if (err.name === "UserExistsError") {
          console.log("User Exists");
          return res.status(409).send(err);
        } else {
          return res.status(500).send(err);
        }
      }

      _passport2.default.authenticate('local', {
        session: false
      })(req, res, function () {
        res.status(200).send('Successfully created new account');
      });
    });
  });

  // '/v1/carAccount/login'
  api.post('/login', _passport2.default.authenticate('local', {
    session: false,
    scope: []
  }), _authMiddleware.generateAccessToken, _authMiddleware.respond);

  // '/v1/carAccount/logout'
  api.get('/logout', _authMiddleware.authenticate, function (req, res) {
    req.logout();
    res.status(200).send('Successfully logged out');
  });

  api.get('/me', _authMiddleware.authenticate, function (req, res) {
    res.status(200).json(req.user);
  });

  return api;
};
//# sourceMappingURL=caraccount.js.map