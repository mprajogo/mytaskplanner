const createTaskHTML = (
    id,
    taskName,
    taskDescription,
    assignedTo,
    dueDate,
    taskStatus
) => {

    const html = `  
    <li class="list-group-item" data-task-id="${id}">
                <div class="card text-center">
                    <div class="card-header text-primary font-weight-bold">${taskStatus} 
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${taskName}</h5>
                        <p class="card-text">${taskDescription}</p>
                        <hr>
                        <div class="container">
                            <div class="row">
                                <div class="col">Assigned to:</div>
                                <div class="col">Due by:</div>
                            </div>
                            <div class="row">
                                <div class="col text-muted">${assignedTo}</div>
                                <div class="col text-muted">${dueDate}</div>
                            </div>
                        </div>
                        <br>
                    </div>
                    <div class="card-footer">
                        <button type="button" class="btn btn btn-outline-secondary" data-toggle="modal" data-target="#editTask">Edit</button>  
                        <button type="submit" class="btn btn-outline-danger delete-button">Delete</button>
                        <button type="submit" class="btn btn-outline-primary done-button">Done</button>
                    </div>
                </div>
            </li>
    `;
    return html;
};  

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(
        taskName,
        taskDescription, 
        assignedTo,
        dueDate,
        taskStatus
    ){
        const task = {
            id: this.currentId++,
            taskName: taskName,
            taskDescription: taskDescription,
            assignedTo: assignedTo,
            dueDate: dueDate,
            taskStatus: taskStatus,
          };
          
          this.tasks.push(task);
        }
    
    render(){
        let tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            const date = new Date(task.dueDate);
            const formattedDate = date.toDateString();
            const taskHtml = createTaskHTML(
                task.id,
                task.taskName,
                task.taskDescription, 
                task.assignedTo,
                task.dueDate,
                task.taskStatus
            );
        tasksHtmlList.push(taskHtml);
        }
        const tasksHtml = tasksHtmlList.join("\n");
        const tasksList = document.querySelector("#taskList");
        tasksList.innerHTML = tasksHtml;
    }
    
    getTaskById(taskId){
        let foundTask;

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task.id === taskId) {
              foundTask = task;
            }
          }
        return foundTask;
    }

    save(){
        let tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem("tasks", tasksJson);
        let currentId = String(this.currentId);
        localStorage.setItem("currentId", currentId);

        console.log(tasksJson);
    }

    load(){
        if(localStorage.getItem("tasks")){
            let tasksJson = localStorage.getItem("tasks");
            this.tasks = JSON.parse(tasksJson);
        }

        if(localStorage.getItem("currentId")){
            let currentId = localStorage.getItem("currentId");
            this.currentId = parseInt(currentId);
        }
    }

    deleteTask(taskId){
        let newTasks = [];

        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if (task.id != taskId){
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;
    }
}


