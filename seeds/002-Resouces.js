
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, Name: 'MDN', description: 'Super techninal guide to most if not all things with web dev'},
        {id: 2, Name: 'W3Schools', description: 'Very comprehensible and teaches you many things'},
        {id: 3, Name: 'StackOverFlow', description: 'DO NOT USE THIS RESOURCE DANGER DANGER! (but for real everyone uses it so its okay'}
      ]);
    });
};
