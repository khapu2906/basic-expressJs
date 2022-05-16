const routerGroup1 = require('./routeGroup1');
const routerGroup2 = require('./routeGroup2');


async function handle (app) {
	routerGroup1.handle()
	routerGroup2.handle()
    app.use('/router-group-1', routerGroup1.route)
    app.use('/router-group-2', routerGroup2.route)
}

module.exports = { handle };