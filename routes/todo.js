const todo = require('./routes/todo');
const express = require('express');
const router = express.Router();

app.use('/todo', todo);
router.get('/', async (req, res) => {
    res.render('pages/todo');
  });
  
  module.exports = router

  router.post('/add', async (req, res) => {
    // if there's no tasks in the session, create one
    if (!req.session.tasks) {
      req.session.tasks = [];
    }
  
    // add new task
    const newTask = req.body.taskName;
    req.session.tasks.push(newTask);
  
    res.redirect('/todo');
  });
  router.post('/done/:index', async (req, res) => {
    // get the index of the task to be deleted
    const index = req.params.index
  
    // only delete if there's that task
    if (req.session.tasks && index < req.session.tasks.length) {
      req.session.tasks.splice(index, 1);
    }
  
    res.redirect('/todo');
  });
    
