var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var OrderSchema = new Schema({
	'buyerId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Buyer'
	},
	'producerId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Producer'
	},
	'product' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Product'
	},
	'totalPrice' : Number
});

module.exports = mongoose.model('Order', OrderSchema);
