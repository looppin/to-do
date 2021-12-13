//get input
const toDo = document.querySelector('#to-do-name');
const toDoDescription = document.querySelector('#to-do-description');
const saveButton = document.querySelector('#taskSave');

eventListener();

//eventListener Start
function eventListener(){

    //add task
    saveButton.addEventListener('click', function(){
        addTask();
    });


}

//add task function
function addTask(){

    taskName = toDo.value;
    taskDescription = toDoDescription.value;

    div = document.createElement('div');
    div.className = 'accordion-item';

}