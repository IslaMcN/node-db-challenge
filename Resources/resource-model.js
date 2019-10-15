const db = require('../db-config');

module.exports={
    add,
    find,
    findById,
    update,
    remove
};

function find(){
    return db('resource').select('id', 'name', 'description')
}

function findById(id){
    return db('resource')
    .where({id})
    .first();
}

function add(project){
    return db('resource')
    .insert(project, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id);
    });
}

function update(project){
    return db('resource')
    .update(project, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })
}

function remove(project){
    return db('resource')
    .del(project, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })
}