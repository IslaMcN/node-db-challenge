const db = require('../db-config');

module.exports={
    add,
    find,
    findById,
    update,
    remove
};

function find(){
    return db('task').select('id', 'description', 'notes', 'completed')
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

function update(task){
    return db('task')
    .update(task, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })
}

function remove(task){
    return db('task')
    .del(task, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })
}

