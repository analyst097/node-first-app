const express = require('express');
const getDb = require('../utils/database').getDb;
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'shop.html'))
    // const db = getDb();
    // db.collection('listingsAndReviews').find({}).limit(4).toArray()
    //     .then((result) => {
    //         res.send(result)

    //     }).catch((err) => {
    //         console.log(err);
    //     });
})

module.exports = router;