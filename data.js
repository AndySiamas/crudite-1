// Data Structures

var masterList = [];                    // Todo List that stores all of the user's tasks

var task = function(job, dueDate) {     // User task class
    this.job = job;
    this.dueDate = dueDate;
}

// Data Helper Functions

var createNewTask = function(job, dueDate) {
    var newTask = new task(job, dueDate);
    masterList.push(newTask);
}