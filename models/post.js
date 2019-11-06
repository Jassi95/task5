var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    content: {type: String },
    author: { type: String }
});


var Gameturn = new Schema({
  turn: {type: Number, default: 1},
});

var Box = new Schema({
  player:{type:String},
  row:{type: Number},
  col:{type: Number}
});

// Export model.
module.exports = mongoose.model('Post', PostSchema);
