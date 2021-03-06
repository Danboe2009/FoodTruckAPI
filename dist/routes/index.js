'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _foodtruck = require('../controller/foodtruck');

var _foodtruck2 = _interopRequireDefault(_foodtruck);

var _account = require('../controller/account');

var _account2 = _interopRequireDefault(_account);

var _car = require('../controller/car');

var _car2 = _interopRequireDefault(_car);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

// connect to db
(0, _db2.default)(function (db) {

  // internal middleware
  router.use((0, _middleware2.default)({ config: _config2.default, db: db }));

  // api routes v1 (/v1)
  router.use('/foodtruck', (0, _foodtruck2.default)({ config: _config2.default, db: db }));
  router.use('/account', (0, _account2.default)({ config: _config2.default, db: db }));
  router.use('/car', (0, _car2.default)({ config: _config2.default, db: db }));
});

exports.default = router;
//# sourceMappingURL=index.js.map