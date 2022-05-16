const express = require('express')
const app = express()
const port = 3210
// const r = require('./route')(app);
const routers = require('./routers');

routers.handle(app);

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})