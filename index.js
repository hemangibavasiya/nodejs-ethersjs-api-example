const express = require('express');
const dotenv = require('dotenv');
const ethRoutes = require('./routes/eth');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', ethRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
