require('dotenv').config();
const mongoose = require('mongoose');
const logger = require('morgan');
const express = require('express');
const PORT = process.env.MONGODB_URI || 3001;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets express to use "public" folder as source folder
app.use(express.static('public'));

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

// Routes
app.use(require('./routes/homeRoutes'));
app.use(require('./routes/dataRoutes'));

app.listen(PORT, () => {
	console.log(`App running on http://localhost:${PORT}`);
});
