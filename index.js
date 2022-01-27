
function validFormFieldInput(){
    const taskName = document.querySelector('#taskName');
    const status = document.querySelector('#status');
    const taskDescription = document.querySelector('#taskDescription');
    const assignedTo = document.querySelector('#assignedTo');
    const dueDate = document.querySelector('#dueDate');

    // Check if the Task Name input value is more than 5 characters.
    if(taskName.value.length > 5 ){
        
    }
    // Check if the Task Description input value is more than 5 characters.
    if(taskDescription.value.length > 5){

    }
    // Check if the Assigned To value is more than 5 characters.
    if(assignedTo.value.length > 5){

    }
    // Check if the Task Due Date input value is not empty.
    if(dueDate.value.length != 0){

    }
    // Check if the Task Status input value is not empty.}
    if(status.value.length != 0){

    }
}

validFormFieldInput();