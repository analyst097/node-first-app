const express = require('express');
const getDb = require('../utils/database').getDb;
const path = require('path');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    // const db = getDb();
    // db.collection('listingsAndReviews').find({}).limit(4).toArray()
    //     .then((result) => {
    //         res.send(result)

    //     }).catch((err) => {
    //         console.log(err);
    //     });
})

module.exports = router;