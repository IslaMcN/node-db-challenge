
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, Name: 'MDN', description: 'Super techninal guide to most if not all things with web dev'},
        {id: 2, Name: 'W3Schools', description: 'Very comprehensible and teaches you many things'},
        {id: 3, Name: 'StackOverFlow', description: 'DO NOT USE THIS RESOURCE DANGER DANGER! (but for real everyone uses it so its okay'}
      ]);
    });
};
