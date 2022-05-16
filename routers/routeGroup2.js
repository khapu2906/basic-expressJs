const express = require('express');
const route = express.Router();

const handle = () => {
	route.get('/', (req, res) => {
		res.send('Hello World Group 2')
	})
	
	route.get('/test', (req, res) => {
		res.send('Test Group 2')
	})
}

module.exports = {
	handle,
	route
}