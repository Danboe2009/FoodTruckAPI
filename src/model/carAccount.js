import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

let CarAccount = new Schema({
  email: String,
  password: String,
  money: Number,
  "car": [{type: Schema.Types.ObjectId, ref: 'Car'}],
});

CarAccount.plugin(passportLocalMongoose);
module.exports = mongoose.model('CarAccount', CarAccount);
