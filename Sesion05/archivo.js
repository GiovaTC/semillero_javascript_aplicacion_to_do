//var isCompleted = false;

function toggleTaskCompleted(index) {
	tasks[index].isCompleted = !tasks[index].isCompleted;
}
/*
var tasks = [
	{
	  description: 'Some task to do',
	  isCompleted: false
	},
	{
	  description: 'Another task to do',
	  isCompleted: false
	},
	{
	  description: 'One more task to do',
	  isCompleted: false
	}
  ]
*/
var Task = function(description, isCompleted) {
	this.description = description;
	this.isCompleted = isCompleted;
  }
  
  Task.prototype.toggleCompleted = function() {
	this.isCompleted = !this.isCompleted;
  }

var tasks = [];

function addTask(description, isCompleted = false) {
  tasks.push(new Task(description, isCompleted));
}

addTask('Some task to do');

console.log(tasks[0]);  // { description: 'Some...', isCompleted: false }

tasks[0].toggleCompleted();

console.log(tasks[0]);  // { description: 'Some...', isCompleted: true }



  toggleTaskCompleted(0);

  toggleTaskCompleted(2);
  
  console.log( tasks );
  
  function deleteTask(index) {
	tasks.splice(index, 1);
}

deleteTask(1);

console.log( tasks );