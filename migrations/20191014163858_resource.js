
exports.up = function(knex) {
  return knex.schema.createTable('resource', function(table){
      table.increments();
      table.string('Resource Name').unique().notNullable();
      table.string('Description').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('resource')
};
