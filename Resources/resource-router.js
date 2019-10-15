const express = require('express');
const db = require('./resource-model');
const router = express.Router();

router.get('/', (req, res) => {
    db.get()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err)
    });
});

router.post('/', (req, res) => {
    const resource = req.body;
    db.insert(resource)
    .then(data => {
        res.send(200).json({message: "Post SuccessFul",
    New_Data: data})
    })
    .catch(err => {
        console.log(err);
    });
});

router.put('/:id', (req, res) => {
    const resource = req.params.id;
    db.update(resource, req.body)
    .then(data => {
        res.send(201).json({message: "Update Successful",
    New_Data: data})
    })
    .catch(err => {
        console.log(err)
    })
});

router.delete('/:id', (req, res) => {
    const resource = req.params.id;
    db.remove(resource)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;