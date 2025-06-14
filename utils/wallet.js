const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider(process.env.PROVIDER_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const getWalletBalance = async (address) => {
  const balance = await provider.getBalance(address);
  return ethers.formatEther(balance);
};

const sendTransaction = async (to, amount) => {
  const tx = await wallet.sendTransaction({
    to,
    value: ethers.parseEther(amount),
  });
  return tx.hash;
};

module.exports = { getWalletBalance, sendTransaction };
