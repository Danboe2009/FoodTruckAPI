import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let CarSchema = new Schema({
  car: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  "last price":{
    type: Number,
    required: true
  },
  "current owner": [{type: Schema.Types.ObjectId, ref: 'Owner'}],
  "last owner": [{type: Schema.Types.ObjectId, ref: 'Owner'}]

  });

  module.exports = mongoose.model('Car', CarSchema);
