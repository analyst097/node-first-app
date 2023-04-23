const MongoClient = require('mongodb').MongoClient;
const dbPasscode = require('../resources');
let _db;

const connectToDb = (callback) => {
    MongoClient.connect(`mongodb+srv://b517002:${dbPasscode}@cluster0.gwnpn44.mongodb.net/sample_airbnb?retryWrites=true&w=majority`)
        .then((client) => {
            console.log('Connected to database.');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err
        })
}

function getDb() {
    if (_db) {
        return _db
    }
    throw 'No Db found!'
}


module.exports = {
    connectToDb: connectToDb,
    getDb: getDb
}
