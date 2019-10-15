
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'HTML4BEGINNERS', description: 'Even the most complex web applications start with simple HTML elements. ', completed: 1, tasks_required: 1 && 2, resources_needed: 3},
        {id: 2, name: 'CSSINLESSTHAN5MIN', description: 'Basic HTML and CSS are fundamental to any web site or web app on the internet. Being able to create layouts using CSS is the next progression on your journey to a full stack web developer.', completed: 0, tasks_required: 1, resources_needed: 2 && 3},
        {id: 3, name: 'JAVASCRIPT', description: 'One of the most powerful web languages is JavaScript. Without it, there is no web. All web browsers use JavaScript in some fashion to power rich user experiences for those interacting with a web page or application.', completed: 1, tasks_required: 1 && 2, resources_needed: 3}
      ]);
    });
};
