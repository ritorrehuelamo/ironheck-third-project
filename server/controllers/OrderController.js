var OrderModel = require('../models/OrderModel.js');

/**
 * OrderController.js
 *
 * @description :: Server-side logic for managing Orders.
 */
module.exports = {

	/**
	 * OrderController.list()
	 */
	list: function (req, res) {
		OrderModel.find()
		.then(orders => res.status(200).json(orders))
		.catch(e => res.status(500).json({message: 'Error when getting Order.', error: e}))
	},

	/**
	 * OrderController.show()
	 */
	show: function (req, res) {
		var id = req.params.id;
		OrderModel.findOne({
			_id: id
		}, function (err, Order) {
			if (err) {
				return res.status(500).json({
					message: 'Error when getting Order.',
					error: err
				});
			}
			if (!Order) {
				return res.status(404).json({
					message: 'No such Order'
				});
			}
			return res.json(Order);
		});
	},

	/**
	 * OrderController.create()
	 */
	create: function (req, res) {
		var Order = new OrderModel({
			buyerId: req.body.buyerId,
			producerId: req.body.producerId,
			product: req.body.product,
			totalPrice: req.body.totalPrice

		});

		Order.save(function (err, Order) {
			if (err) {
				return res.status(500).json({
					message: 'Error when creating Order',
					error: err
				});
			}
			return res.status(201).json(Order);
		});
	},

	/**
	 * OrderController.update()
	 */
	update: function (req, res) {
		var id = req.params.id;
		OrderModel.findOne({
			_id: id
		}, function (err, Order) {
			if (err) {
				return res.status(500).json({
					message: 'Error when getting Order',
					error: err
				});
			}
			if (!Order) {
				return res.status(404).json({
					message: 'No such Order'
				});
			}

			Order.buyerId = req.body.buyerId ? req.body.buyerId : Order.buyerId;
			Order.producerId = req.body.producerId ? req.body.producerId : Order.producerId;
			Order.product = req.body.product ? req.body.product : Order.product;
			Order.totalPrice = req.body.totalPrice ? req.body.totalPrice : Order.totalPrice;

			Order.save(function (err, Order) {
				if (err) {
					return res.status(500).json({
						message: 'Error when updating Order.',
						error: err
					});
				}

				return res.json(Order);
			});
		});
	},

	/**
	 * OrderController.remove()
	 */
	remove: function (req, res) {
		var id = req.params.id;
		OrderModel.findByIdAndRemove(id, function (err, Order) {
			if (err) {
				return res.status(500).json({
					message: 'Error when deleting the Order.',
					error: err
				});
			}
			return res.status(204).json();
		});
	}
};