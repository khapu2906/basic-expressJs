// const routerGroup1 = require('./routeGroup1');x
// const routerGroup2 = require('./routeGroup2');
const homeController = require('./../controllers/homeController')
const aboutController = require('./../controllers/aboutController')
const contactController = require('./../controllers/contactController')
const contactValidation = require('./../requests/contact')

async function handle (app) {
	app.get('/', homeController.index)
	app.get('/about', aboutController.index)
	app.get('/contact', contactController.index)
	app.post('/contact/store', contactValidation.store, contactController.store)
	// routerGroup1.handle()
	// routerGroup2.handle()
    // app.use('/router-group-1', routerGroup1.route)
    // app.use('/router-group-2', routerGroup2.route)
	
}

module.exports = { handle };