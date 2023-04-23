const http = require('http')
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const app = express();
const connectToDb = require('./utils/database').connectToDb;
//middlewares

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
});

connectToDb(() => {
    app.listen(3000)
})

