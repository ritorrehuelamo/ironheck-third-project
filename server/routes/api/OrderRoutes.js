const express = require('express');
const router = express.Router();
const OrderController = require('../../controllers/OrderController.js');

router.get('/', OrderController.list);
router.get('/:id', OrderController.show);
router.post('/', OrderController.create);
router.put('/:id/update', OrderController.update);
router.delete('/:id/delete', OrderController.remove);

module.exports = router;
