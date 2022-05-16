const express = require('express');
const route = express.Router();

const handle = () => {
	route.get('/', (req, res) => {
		res.send('Hello World Group 1')
	})
	
	route.get('/test', (req, res) => {
		res.send('Test Group 1')
	})
}

module.exports = {
	handle,
	route
}