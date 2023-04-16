const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/shop/" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
});

router.post('/product', (req, res, next) => {
    res.redirect('/shop')
});

module.exports = router;