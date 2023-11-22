var tasks = [];

function addTask(tasks, description, isCompleted = false) {
  var newTasks = [].concat(tasks);

  newTasks.push({
    description: description,
    isCompleted: isCompleted
  });

  return newTasks;
}

function toggleTaskCompleted(tasks, index) {
  var newTasks = [].concat(tasks);

  if(newTasks[index]) {
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
  }

  return newTasks;
}

function deleteTask(tasks, index) {
  var newTasks = tasks.filter(function(task, i) {
    return i !== index;
  })

  return newTasks;
}