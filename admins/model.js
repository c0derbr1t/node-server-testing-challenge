const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    remove
}

function find() {
    return db('admins');
};

function findById(id) {
    if (!db('admins').where({ id })) {
        return null;
    } else {
        return db('admins')
            .where({ id })
            .first();
    };
};

function add(admin) {
    return db('admins')
        .insert(admin, 'id');
};

function remove(id) {
    return db('admins')
        .where({ id })
        .del()
}