var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://silvana:Silvana@ds117869.mlab.com:17869/taskemoon',['tasks']);

// Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

// Get Single Tasks
router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

module.exports = router;