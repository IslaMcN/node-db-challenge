const db = require('../db-config');

module.exports={
    add,
    find,
    findById,
    update,
    remove
};

function find(){
    return db('project').select('id', 'name', 'description', 'completed')
}

function findById(id){
    return db('project')
    .where({id})
    .first();
}

function add(project){
    return db('project')
    .insert(project, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id);
    });
}

function update(project){
    return db('project')
    .update(project, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })
}

function remove(project){
    return db('project')
    .del(project, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })
}

