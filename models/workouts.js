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
				name: {
					type: String,
					trim: true,
					required: 'Please enter an exercise',
				},
				type: {
					type: String,
					trim: true,
					required: 'Please enter the type of exercise (e.g. cardio)',
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

workout.virtual('totalTime').get(() => {
	return this.exercise.reduce((sum, exercise) => {
		return sum + exercise.duration;
	});
});

const Workout = mongoose.model('Workout', workout);
