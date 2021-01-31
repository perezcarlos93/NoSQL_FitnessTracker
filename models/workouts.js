const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workout = new Schema(
	{
		day: {
			type: Date,
			default: () => new Date(),
		},
		exercise: [
			{
				type: {
					type: String,
					trim: true,
					required: 'Please enter the type of exercise (e.g. cardio)',
				},
				name: {
					type: String,
					trim: true,
					required: 'Please enter an exercise',
				},
				duration: {
					type: Number,
					required: 'Please enter a duration for the exercise',
				},
				weight: {
					type: Number,
				},
				sets: {
					type: Number,
				},
				reps: {
					type: Number,
				},
				distance: {
					type: Number,
				},
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	},
	{
		toObject: {
			virtuals: true,
		},
	}
);

workout.virtual('totalDuration').get(function () {
	this.exercise.reduce((total, exercise) => {
		return total + exercise.duration;
	}, 0);
});
const Workout = mongoose.model('Workout', workout);

module.exports = Workout;
