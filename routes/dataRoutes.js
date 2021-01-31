const router = require('express').Router();
const Workout = require('../models/workouts.js');
const path = require('path');

router.post('/api/workouts', (req, res) => {
	Workout.create({})
		.then((workout) => {
			res.json(workout);
		})
		.catch((err) => console.log(err));
});

router.get('/api/workouts', (req, res) => {
	Workout.find()
		.then((workout) => {
			res.json(workout);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
