const express = require('express');
const router = express.Router();
const tasksControllers = require('./../controllers/tasks.controller');
//const path = require('path');


router.get('/',(req,res)=>{
    res.render('index.html');

});
router.get('/api/tasks', tasksControllers.getTasks);
router.post('/api/tasks', tasksControllers.createTasks);
router.delete('/api/tasks/:id', tasksControllers.deleteTasks);

//buscar tarea:
//router.get('/api/tasks/:id', tasksControllers.updateTasks );
router.get('/api/tasks/:id', tasksControllers.statusTasks);

router.put('/api/tasks/:id', tasksControllers.putTasks);


module.exports = router;