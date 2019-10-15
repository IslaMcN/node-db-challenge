const db = require('../db-config');

module.exports={
    add,
    find,
    findById,
    update,
    remove
};

function find(){
    return db('task').then(task => {
        return task.map(task => body(task))
    })
}

function findById(id){
    return db('task')
    .where({id})
    .first();
}

function add(task){
    return db('task')
    .insert(task, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id);
    });
}

function update(id, changes){
    return db('task')
    .where('id', id)
    .update(changes)
    .then(count => {
        count > 0 ? this.find(id) : null
    });
}

function remove(id){
    return db('task')
    .where('id', id)
    .del()
}

function trueOrFalse(tf){
    return tf === 1 ? true : false;
}
function body(item){
    return {...item, completed: trueOrFalse(item.completed)}
}