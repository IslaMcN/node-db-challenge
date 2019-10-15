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

function add(resource){
    return db('resource')
    .insert(resource, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id);
    });
}

function update(id, changes){
    return db('resource')
    .where('id', id)
    .update(changes)
    .then(
        count => {
            count > 0 ? this.find(id) : null
        }
    );
}

function remove(id){
    return db('resource')
    .where("id", id)
    .del();
}
