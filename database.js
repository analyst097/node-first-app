const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

function connectToDb(callback) {
    MongoClient.connect('mongodb+srv://b517002:vH70HRE3A95cdidZ@cluster0.gwnpn44.mongodb.net/?retryWrites=true&w=majority')
        .then((result) => {
            console.log('Connected to database.');
            callback(result);
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = connectToDb
