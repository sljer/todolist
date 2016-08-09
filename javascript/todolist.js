var TodoList = function(){

    /* model */
    /* the task */
    var task = {
        name: ko.observable(),
        description: ko.observable()
    };

    /* array of tasks */
    var tasks = ko.observableArray();

    /* add members here */
    var addTask = function () {
        tasks.push({
            name: task.name(),
            description: task.description()
        });
        clearTask();
    };

    var deleteTask = function (task) {
        console.log(task.name);
        tasks.remove(task);
    };

    var clearTask = function () {
        task.name(null);
        task.description(null);
    };

    var init = function () {
        /* add code to initialize this module */
        ko.applyBindings(TodoList);
    };

    /* execute the init function when the DOM is ready */
    $(init);

    return {
        /* add members that will be exposed publicly */
        task: task,
        tasks: tasks,
        addTask: addTask,
        deleteTask: deleteTask 
    };

}();
