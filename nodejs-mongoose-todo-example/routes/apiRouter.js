const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')

router.post('/create', async (req, res) => {
	const record = req.body
	console.log(record)
	// * CREATE (_C_RUD)
	const response = await Todo.create(record)
	console.log(response)
	res.json({ status: 'ok' })
})

router.post('/modify', async (req, res) => {
	const { old: oldTitle, new: newTitle } = req.body
	const response = await Todo.updateOne(
		{
			record: oldTitle
		},
		{
			$set: {
				record: newTitle
			}
		}
	)
	console.log(response)
	res.json({ status: 'ok' })
})

router.get('/get', async (req, res) => {
	const records = await Todo.find({})
	// console.log('Response => ', records)
	res.json(records)
})

router.post('/delete', async (req, res) => {
	const { record } = req.body
	console.log(record, '/api/delete')
	const response = await Todo.deleteOne({ record })
	console.log(response, '/api/delete repsonse')
	res.json({ status: 'ok' })
})

module.exports = router;