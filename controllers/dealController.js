const Deal = require('../models/Deal');
const User = require('../models/User');

exports.createDeal = async (req, res) => {
    try {
        const deal = new Deal(req.body);
        await deal.save();
        res.status(201).json(deal);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllDeals = async (req, res) => {
    try {
        const category = req.query.category;
        const deals = category
            ? await Deal.find({ category })
            : await Deal.find();
        res.json(deals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.claimDeal = async (req, res) => {
    try {
        const { userId, dealId } = req.params;
        const user = await User.findOne({ id: userId });
        const deal = await Deal.findOne({ id: dealId });

        if (!user || !deal) return res.status(404).json({ error: "User or Deal not found" });

        if (user.walletBalance < deal.price) {
            return res.status(400).json({ message: "Insufficient wallet balance" });
        }

        if (user.claimedDeals.includes(dealId)) {
            return res.status(409).json({ message: "Deal already claimed" });
        }

        user.walletBalance -= deal.price;
        user.claimedDeals.push(dealId);
        await user.save();

        res.json({ message: "Deal claimed successfully", newBalance: user.walletBalance });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
