const taskManager = new TaskManager(0);

taskManager.load();
taskManager.render();

// Task 5 - Display Current Date
const dateElement = document.querySelector('#currentDate');
const current = new Date();
let date = `The current date is ${current.getDate()}-${(current.getMonth()+1)}-${current.getFullYear()}`;
dateElement.innerHTML = date;

// Minimum date for input form
document.getElementsByName("dueDate")[0].setAttribute('min', currentDate);

const form = document.querySelector('#addTaskForm');

form.addEventListener("submit", (event) => {
const taskName = document.querySelector('#taskName');
const taskStatus = document.querySelector('#taskStatus');
const taskDescription = document.querySelector('#taskDescription');
const assignedTo = document.querySelector('#assignedTo');
const dueDate = document.querySelector('#dueDate');

let taskNameValue = taskName.value;
let taskDescriptionValue = taskDescription.value;
let taskStatusValue = taskStatus.value;
let assignedToValue = assignedTo.value;
let dueDateValue = dueDate.value;

let validationFail = 0;

event.preventDefault();
event.stopPropagation();

  // Form validation for Task Name Field min length 5
  if (taskNameValue.length >= 5) {
    taskName.classList.add("is-valid");
    taskName.classList.remove("is-invalid");
  } else {
    taskName.classList.add("is-invalid");
    taskName.classList.remove("is-valid");
    validationFail++;
  }

  // Form validation for Task Description Field min length 5
  if (taskDescriptionValue.length >= 5) {
    taskDescription.classList.add("is-valid");
    taskDescription.classList.remove("is-invalid");
  } else {
    taskDescription.classList.add("is-invalid");
    taskDescription.classList.remove("is-valid");
    validationFail++;
  }

  if (assignedToValue) {
    assignedTo.classList.add("is-valid");
    assignedTo.classList.remove("is-invalid");
  } else {
    assignedTo.classList.add("is-invalid");
    assignedTo.classList.remove("is-valid");
    validationFail++;
  }  
  // Form validation for Due Date Field not empty
  // try your own validation for a date in the future
  if (dueDateValue) {
    dueDate.classList.add("is-valid");
    dueDate.classList.remove("is-invalid");
  } else {
    dueDate.classList.add("is-invalid");
    dueDate.classList.remove("is-valid");
    validationFail++;
  }
  // Form validation for Task Status Field not empty
  if (taskStatusValue) {
    taskStatus.classList.add("is-valid");
    taskStatus.classList.remove("is-invalid");
  } else {
    taskStatus.classList.add("is-invalid");
    taskStatus.classList.remove("is-valid");
    validationFail++;
  }
  // If validation fails then function will not proceed further and
  // will return. The value of validationFail will also needed to be
  // reset to 0.
  // ----------------------------------------------------------------------------------
  
  let clearValues = () => {
    taskNameValue = "";
    taskDescriptionValue = "";
    assignedToValue = "";
    taskStatusValue = "";
    dueDateValue = "";
    taskName.classList.remove("is-valid");
    taskDescription.classList.remove("is-valid");
    assignedTo.classList.remove("is-valid");
    taskStatus.classList.remove("is-valid");
    dueDate.classList.remove("is-valid");
  };


  if (validationFail > 0) {
    validationFail = 0;
    return;
  } else {
    taskManager.addTask(
      taskNameValue,
      taskDescriptionValue,
      assignedToValue,
      dueDateValue,
      taskStatusValue
    );
    
    clearValues();
    taskManager.save();
    taskManager.render();
    
  }

  $('#addTask').modal('toggle');
    return false;
});


const tasksList = document.querySelector('#taskList');
tasksList.addEventListener('click', (event) => { 
  if(event.target.classList.contains('done-button')){
    const parentTask = event.target.parentElement.parentElement.parentElement;
    console.log(parentTask);
    let taskId = parseInt(parentTask.dataset.taskId);

    const task = taskManager.getTaskById(taskId);
    task.taskStatus = "Done";

    taskManager.save();
    taskManager.render();

  }

  if(event.target.classList.contains('delete-button')){
    const parentTask = event.target.parentElement.parentElement.parentElement;
    let taskId = parseInt(parentTask.dataset.taskId);

    taskManager.deleteTask(taskId);
    taskManager.save();
    taskManager.render();
  }
});


