const express = require('express')
const app = express()
const port = 3210
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// const r = require('./route')(app);
const routers = require('./routers');

app.use('/public', express.static('public'));

routers.handle(app);

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})