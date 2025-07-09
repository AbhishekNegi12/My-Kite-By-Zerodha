const { Signup, Login, userVerification } = require('../controllers/AuthController')
const { OrdersModel } = require('../model/OrdersModel');
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/',userVerification)

// Create new order (buy/sell)
router.post('/newOrder', async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const order = await OrdersModel.create({ name, qty, price, mode });
    res.status(201).json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Order creation failed', error: err.message });
  }
});

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await OrdersModel.find({}).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch orders', error: err.message });
  }
});

module.exports = router