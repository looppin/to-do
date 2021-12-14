//get input
const toDo = document.querySelector('#to-do-name');
const toDoDescription = document.querySelector('#to-do-description');
const saveButton = document.querySelector('#taskSave');
const accordion = document.querySelector('#accordionExample');

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

    unique = Math.random().toString(16).slice(2);

    taskName = toDo.value;
    taskDescription = toDoDescription.value;

    //create div
    div = document.createElement('div');
    div.className = 'accordion-item';

    //create h2
    h2 = document.createElement('h2');
    h2.className = 'accordion-header';
    h2.setAttribute('id',unique);

    //create button
    button = document.createElement('button');
    button.className = 'accordion-button';
    button.setAttribute('type','button');
    button.setAttribute('data-bs-toggle','collapse');
    button.setAttribute('data-bs-target','#'+unique);
    button.setAttribute('aria-expanded','true');
    button.setAttribute('aria-controls',unique);
    button.innerHTML = taskName;

    //add button to h2
    h2.appendChild(button);

    //add h2 to div
    div.appendChild(h2);

    //add div to accordion
    accordion.appendChild(div);


}