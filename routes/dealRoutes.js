const express = require('express');
const router = express.Router();
const dealController = require('../controllers/dealController');
const { verifyToken } = require('../middlewares/auth');

router.post('/deals', dealController.createDeal);
router.get('/deals', dealController.getAllDeals);

router.post('/claim/:userId/:dealId', verifyToken, dealController.claimDeal);

module.exports = router;
