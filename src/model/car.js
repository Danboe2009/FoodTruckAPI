import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let CarSchema = new Schema({
  car: String,
  model: String,
  price: Number,
  lastprice: Number,
  currentOwner: [{type: Schema.Types.ObjectId, ref: 'Account'}],
  lastOwner: [{type: Schema.Types.ObjectId, ref: 'Account'}]

  });

  module.exports = mongoose.model('Car', CarSchema);
