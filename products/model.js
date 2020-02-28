const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    remove
}

function find() {
    return db('products');
};

function findById(id) {
    if (!db('products').where({ id })) {
        return null;
    } else {
        return db('products')
            .where({ id })
            .first();
    };
};

function add(product) {
    return db('products')
        .insert(product, 'id');
};

function remove(id) {
    return db('products')
        .where({ id })
        .del()
}