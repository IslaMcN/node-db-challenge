const db = require('../db-config');

module.exports={
    add,
    find,
    findById,
    update,
    remove,
    
};

function find(){
    return db('projects').then((project) => {
        return project.map(project => body(project))
    })
}

function findById(id){
    return db('projects')
    .where({id})
    .first();
}

function add(project){
    return db('projects')
    .insert(project, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id);
    });
}

function update(id, changes){
    return db('projects')
    .where('id', id)
    .update(changes)
    .then(count => {
        count > 0 ? this.find(id) : null
    }
    );
}

function remove(id){
    return db('projects')
    .where("id", id)
    .del();
}

function trueOrFalse(tf){
    return tf === 1 ? true : false;
}
function body(item){
    return {...item, completed: trueOrFalse(item.completed)}
}