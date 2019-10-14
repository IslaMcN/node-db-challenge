
exports.up = function(knex) {
  return knex.schema.createTable('resource', function(table){
      table.increments();
      table.string('Resource Name').notNullable().unique();
      table.string('Description').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('resource')
};
