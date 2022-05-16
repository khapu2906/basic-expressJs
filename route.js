
module.exports = function routes(app) {
	app.get('/', (req, res) => {
		res.send('Hello World!')
	})
	
	app.get('/test', (req, res) => {
		res.send('test Route')
	})
}