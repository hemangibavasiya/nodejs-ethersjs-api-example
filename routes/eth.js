const express = require('express');
const { getWalletBalance, sendTransaction } = require('../utils/wallet');
const router = express.Router();

router.get('/balance/:address', async (req, res) => {
  try {
    const balance = await getWalletBalance(req.params.address);
    res.json({ balance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/send-transaction', async (req, res) => {
  try {
    const txHash = await sendTransaction(req.body.to, req.body.amount);
    res.json({ txHash });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
