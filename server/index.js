const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const app = express();

app.use(express.json()); //middleware

//routes
app.get("/users", async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
});

app.post("/users", async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.status(200).json(user);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
});

//update user
app.put("/users/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndUpdate(id, req.body);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const updatedUser = await User.findById(id);
		res.status(200).json(updatedUser);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
});

//delete a user
app.delete("/users/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndDelete(id);
		if (!user) {
			return res
				.status(404)
				.json({ message: `cannot find any product with ID ${id}` });
		}
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

mongoose
	.connect(
		"mongodb+srv://dummy:1234@cluster0.jhfzoae.mongodb.net/Node-API?retryWrites=true&w=majority"
	)
	.then(() => {
		console.log("Connected to database");
		app.listen(3000, () => {
			console.log(`Server is running on port 3000`);
		});
	})
	.catch((err) => {
		console.log("Error connecting to database", err);
	});
