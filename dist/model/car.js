'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var CarSchema = new Schema({
  car: String,
  model: String,
  price: Number,
  lastprice: Number,
  currentOwner: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
  lastOwner: [{ type: Schema.Types.ObjectId, ref: 'Account' }]

});

module.exports = _mongoose2.default.model('Car', CarSchema);
//# sourceMappingURL=car.js.map