const express = require('express');
const db = require('./project-model');
const router = express.Router();

router.get('/', (req, res) => {
    db.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err)
    });
});

router.post('/', (req, res) => {
    const project = req.body;
    console.log(project)
    db.add(project)
    .then(data => {
        res.status(200).json({message: "Post SuccessFul",
    New_Data: data})
    })
    .catch(err => {
        console.log(err);
    });
});

router.put('/:id', (req, res) => {
    const project = req.params.id;
    db.update(project, req.body)
    .then(data => {
        res.send(201).json({messange: "Update Successful",
    New_Data: data})
    })
    .catch(err => {
        console.log(err)
    })
});

router.delete('/:id', (req, res) => {
    const project = req.params.id;
    db.remove(project)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;