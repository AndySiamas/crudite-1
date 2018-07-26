// Data Structures

var masterList = [];                    // Todo List that stores all of the user's tasks

var task = function(job, dueDate) {     // User task class
    this.job = job;
    this.dueDate = dueDate;
}

// Data Helper Functions

var displayMasterList = function() {
    masterList = [];
    var master = $('.todoList');
    var taskList = getTasksFromStorage();
    master.html('<br><br>');
    taskList.forEach(function(task) {
        masterList.push(task);
        master.prepend(`<div class='task'> <p> ${task.job} - ${task.dueDate} </p> </div>`);
    });
}

var getTasksFromStorage = function() {
    var taskList = localStorage.getItem('taskList');

    if (taskList) {
        return JSON.parse(taskList);
    } else {
        localStorage.setItem('taskList', JSON.stringify(masterList));
        taskList = localStorage.getItem('taskList');
        return JSON.parse(taskList); 
    }
}

var createNewTask = function(job, dueDate) {
    var newTask = new task(job, dueDate);
    masterList.push(newTask);
    localStorage.setItem('taskList', JSON.stringify(masterList));
}

var getUserDate = function() {
    var month = $('.dateMonth').val();
    var day = $('.dateDay').val();
    var year = $('.dateYear').val();
    var time = $('.dateTime').val();
    var local = $('.dateLocal').val();
    console.log(`${month} ${day} ${year} ${time} ${local}`)
    return `Due by ${month} ${day}, ${year} ${time}${local}`;
}

var addDateElements = function() {
    var dateMonth = $('.dateMonth');
    var dateDay = $('.dateDay');
    var dateYear = $('.dateYear');
    var dateTime = $('.dateTime');
    var dateLocal = $('.dateLocal');

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (var i = 0; i < 12; i++) {
        var newMonth = $('<option class="dueMonth"> ' + months[i] + ' </option>');
        dateMonth.append(newMonth);
    }

    for (var i = 1; i <= 31; i++) {
        var newDay = $('<option class="dueDay"> ' + i + ' </option>');
        dateDay.append(newDay);
    }

    for (var i = 2018; i <= 2100; i++) {
        var newYear = $('<option class="dueYear"> ' + i + ' </option>');
        dateYear.append(newYear);
    }

    for (var i = 1; i <= 12; i++) {
        var newTime = $('<option class="dueTime"> ' + i + ':00 </option>');
        dateTime.append(newTime);
    }
}