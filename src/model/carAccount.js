import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

let Account = new Schema({
  email: String,
  password: String,
  money: {
    type: Number,
    required: true
  },
  "car": [{type: Schema.Types.ObjectId, ref: 'Car'}],
});

Account.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', Account);
