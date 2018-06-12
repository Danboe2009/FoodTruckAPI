'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passportLocalMongoose = require('passport-local-mongoose');

var _passportLocalMongoose2 = _interopRequireDefault(_passportLocalMongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var CarAccount = new Schema({
  email: String,
  password: String,
  money: Number,
  "car": [{ type: Schema.Types.ObjectId, ref: 'Car' }]
});

CarAccount.plugin(_passportLocalMongoose2.default);
module.exports = _mongoose2.default.model('CarAccount', CarAccount);
//# sourceMappingURL=carAccount.js.map