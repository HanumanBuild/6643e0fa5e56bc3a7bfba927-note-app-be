const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const noteRoutes = require('./routes/noteRoutes');
app.use('/api/notes', noteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});