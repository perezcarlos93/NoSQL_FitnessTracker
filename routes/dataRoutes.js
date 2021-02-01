const router = require('express').Router();
const Workout = require('../models/workouts.js');
const path = require('path');

router.get('/api/workouts', (req, res) => {
	Workout.find()
		.then((workout) => {
			res.json(workout);
		})
		.catch((err) => console.log(err));
});

router.post('/api/workouts', (req, res) => {
	Workout.create({})
		.then((workout) => {
			res.json(workout);
		})
		.catch((err) => console.log(err));
});

router.put('/api/workouts', (req, res) => {
	Workout.findByIdAndUpdate(
		req.body.params.id,
		{
			$push: { exercise: req.body },
		},
		{
			new: true,
			runValidators: true,
		}
	)
		.then((workout) => {
			res.json(workout);
		})
		.catch((err) => console.log(err));
});

router.delete('/api/workouts', (req, res) => {
	Workout.findByIdAndDelete(req.body.id)
		.then(() => res.json(true))
		.catch((err) => console.log(err));
});

module.exports = router;
