const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		city: {
			type: String,
			required: true,
		},
		ward: {
			type: String,
			required: true,
		},
		houseNo: {
			type: String,
			required: true,
		},
		sq: {
			type: Number,
			required: true,
		},
		vw: {
			type: Number,
			required: true,
		},
		c: {
			type: Number,
			required: true,
		},
		ei: {
			type: Number,
			required: true,
		},
		ce: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
