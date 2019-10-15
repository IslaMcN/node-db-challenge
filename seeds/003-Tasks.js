
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'fork, add your TL as collab, and clone', notes: 'I often forget to add Daisy so make sure you add your TL', completed: 0, ProjectID: 1},
        {id: 2, description: 'add, commit, push', notes: 'if you do not commit often you might loose your precious work', completed: 1, ProjectID: 2},
        {id: 3, description: 'pull request and submit airtable', notes: 'Leave feedback and a meaningful PR', completed: 0, ProjectID: 1}
      ]);
    });
};
