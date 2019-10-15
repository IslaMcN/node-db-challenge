
exports.up = function(knex) {
  return knex.schema.createTable('projects', function(table){
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable()
      table.boolean('is_complete').notNullable().defaultTo(false);
      table.integer('user_id').references('id').inTable('users');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      time.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('projects');
};
