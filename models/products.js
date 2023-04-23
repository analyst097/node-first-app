const getDb = require("../utils/database").getDb;

class Product {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    // static getCollection() {
    //     const db = getDb();
    //     db.getCollection('listingsAndReviews');
    // }
}