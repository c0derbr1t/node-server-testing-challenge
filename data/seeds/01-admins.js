
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admins').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        {id: 1, name: 'Brit'},
        {id: 2, name: 'Parker'},
        {id: 3, name: 'Nasa'}
      ]);
    });
};
