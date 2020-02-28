const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    remove
}

function find() {
    return db('employees');
};

function findById(id) {
    if (!db('employees').where({ id })) {
        return null;
    } else {
        return db('employees')
            .where({ id })
            .first();
    };
};

function add(employee) {
    return db('employees')
        .insert(employee, 'id');
};

function remove(id) {
    return db('employees')
        .where({ id })
        .del()
}