//var isCompleted = false;

function markTaskAsCompleted() {
	isCompleted = true;
}

function martTaskAsCompleted() {
	isCompleted = !isCompleted;
}

function toggleTaskCompleted(index) {
    tasks[index].isCompleted = !tasks[index].isCompleted;
}


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

  toggleTaskCompleted(0);

  toggleTaskCompleted(2);
  
  console.log( tasks );

  function deleteTask(index) {
    tasks.splice(index, 1);
}

deleteTask(1);

console.log( tasks );