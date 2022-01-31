const createTaskHTML = (
    taskName,
    taskDescription,
    assignedTo,
    dueDate,
    taskStatus
) => {

    const html = `  
    <li class="list-group-item">
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
                        <button type="submit" class="btn btn-outline-danger">Delete</button>
                    </div>
                </div>
            </li>
    `;
    return html;
};  


  
class TaskManager {
    constructor(currentID = 0) {
        this.tasks = [];
        this.currentID = currentID;
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
    }


