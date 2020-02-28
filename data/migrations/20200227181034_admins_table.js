
exports.up = function(knex) {
  return knex.schema
    .createTable('admins', tbl => {
        tbl.increments();
        tbl.string('name', 200)
            .notNullable()
            .index()
  })
  .createTable('employees', tbl => {
        tbl.increments();
        tbl.string('name', 200)
            .notNullable()
            .index()
  })
  .createTable('products', tbl => {
        tbl.increments();
        tbl.string('name', 200)
            .notNullable();
        tbl.string('description', 400);
        tbl.integer('price')
            .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema
        .dropTableIfExists('products')
        .dropTableIfExists('employees')
        .dropTableIfExists('admins');
};
