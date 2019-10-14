
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task', function(table){
      table.increments();
      table.string('Task Name').notNullable();
      table.string('Description').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task');
};
