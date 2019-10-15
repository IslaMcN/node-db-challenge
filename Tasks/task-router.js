const express = require('express');
const db = require('./task-model');
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
    const task = req.body;
    db.add(task)
    .then(data => {
        res.send(200).json({message: "Post SuccessFul",
    New_Data: data})
    })
    .catch(err => {
        console.log(err);
    });
});

router.put('/:id', (req, res) => {
    const task = req.params.id;
    db.update(task, req.body)
    .then(data => {
        res.send(201).json({message: "Update Successful",
    New_Data: data})
    })
    .catch(err => {
        console.log(err)
    })
});

router.delete('/:id', (req, res) => {
    const task = req.params.id;
    db.remove(task)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;