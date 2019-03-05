const Tasks = require('./../models/tasks.model');

const tasksController = {};

tasksController.getTasks = async (req,res)=>{
    const task = await Tasks.find();
    console.log(task);
    res.json(task);
};

tasksController.createTasks = async (req,res)=>{
 const newTask =  new Tasks({

    title: req.body.title,
    description:  req.body.description});
    console.log(newTask);
    await  newTask.save()
res.json({status: " tarea creada"});

  
};

tasksController.deleteTasks = async (req,res)=>{
    const {id} = req.params;
    await Tasks.findByIdAndRemove(id);
    res.json({status:"tasks delete"});
    
};

tasksController.putTasks =async (req,res)=>{
    const{id} = req.params;
    const bodyValue = {
        title: req.body.title,
        description: req.body.description
    };

    await Tasks.findByIdAndUpdate(id, {$set: bodyValue});
    res.json({status: 'udate'});
   
};
//Buscar para Actualizar
tasksController.updateTasks = async (req,res)=>{
    const {id} = req.params; 
    const selected = await Task.findById(id);
     res.json(selected);

 
};
//status
tasksController.statusTasks = async (req,res)=>{
    let {id}= req.params;
    const taskStatus = await Tasks.findById(id);
    taskStatus.status = !taskStatus.status;
    await taskStatus.save();
    res.json(taskStatus) ;
};

module.exports= tasksController;