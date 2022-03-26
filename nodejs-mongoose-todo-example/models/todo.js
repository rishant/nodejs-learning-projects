const mongoose = require('mongoose')
const connection = require("../util/database");

const TodoSchema = new mongoose.Schema({
	record: { 
		type: String, 
		required: true 
	},
	date: {
		type: Number,
		default: Date.now
	}
})

const Todo = connection.model('Todo', TodoSchema)

module.exports = Todo
