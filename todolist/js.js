const form = document.querySelector('.form');
const taskInput = document.querySelector('.form_text_input');
const tasksList=document.querySelector('ul');
const prioritetSign = document.querySelector('.form_check__input');

//добавление задачи
form.addEventListener('submit', addTask);

//удаление задачи
tasksList.addEventListener('click', deleteTask);

//отмечаем задачу завершенной
tasksList.addEventListener('click',doneTask);

//функции
function addTask(event){

    event.preventDefault();
    const taskText = taskInput.value
    const prioritetSign = document.querySelector('.form_check__input');
    let len=tasksList.children.length;
    
    if (len>0 && prioritetSign.checked===false){
        let liLastClassName=tasksList.children[len-1].className;
            if ((liLastClassName==='list-group-item task')&&(len>0)){
            const taskHTML = ` <li class="list-group-item task2">
            <div class="div-task">
            <label class="check option">
                <input class="check__input" data-action="done" type="checkbox">
                <span class="check__box"></span>
                <b class="task-title">${taskText}</b>
            </label>
            </div>
            <div class="task-item__buttons">
                <button type="button" data-action="delete" class="btn-action">
                    <img src="img/trush.png" alt="Done" width="18" height="18">
                </button>
            </div> 
        </li>`;

        tasksList.insertAdjacentHTML('beforeend',taskHTML)
            }
            else{
                const taskHTML = ` <li class="list-group-item task">
            <div class="div-task">
            <label class="check option">
                <input class="check__input" data-action="done" type="checkbox">
                <span class="check__box"></span>
                <b class="task-title">${taskText}</b>
            </label> 
            </div>
            <div class="task-item__buttons">
                <button type="button" data-action="delete" class="btn-action">
                    <img src="img/trush.png" alt="Done" width="18" height="18">
                </button>
            </div>
        </li>`;

        tasksList.insertAdjacentHTML('beforeend',taskHTML)
        }

    }else if(len>0 && prioritetSign.checked===true){
        let liLastClassName=tasksList.children[len-1].className;
        if ((liLastClassName==='list-group-item task') && (len>0)){
            const taskHTML = ` <li class="list-group-item task2">
            <div class="div-task">
            <label class="check option">
                <input class="check__input" data-action="done" type="checkbox">
                <span class="check__box"></span>
                <img src="img/prioritet.png">
                <b class="task-title">${taskText}</b>
            </label>
            </div>
            <div class="task-item__buttons">
                <button type="button" data-action="delete" class="btn-action">
                    <img src="img/trush.png" alt="Done" width="18" height="18">
                </button>
            </div> 
        </li>`;

        tasksList.insertAdjacentHTML('beforeend',taskHTML)
            }
            else{
                const taskHTML = ` <li class="list-group-item task">
            <div class="div-task">
            <label class="check option">
                <input class="check__input" data-action="done" type="checkbox">
                <span class="check__box"></span>
                <img src="img/prioritet.png">
                <b class="task-title">${taskText}</b>
            </label> 
            </div>
            <div class="task-item__buttons">
                <button type="button" data-action="delete" class="btn-action">
                    <img src="img/trush.png" alt="Done" width="18" height="18">
                </button>
            </div>
        </li>`;

        tasksList.insertAdjacentHTML('beforeend',taskHTML)
    }
}else if(prioritetSign.checked===true){
    const taskHTML = ` <li class="list-group-item task">
    <div class="div-task">
     <label class="check option">
         <input class="check__input" data-action="done" type="checkbox">
         <span class="check__box"></span>
         <img src="img/prioritet.png">
     <b class="task-title">${taskText}</b>
     </label> 
    </div>
    <div class="task-item__buttons">
         <button type="button" data-action="delete" class="btn-action">
             <img src="img/trush.png" alt="Done" width="18" height="18">
         </button>
     </div>
 </li>`;

 tasksList.insertAdjacentHTML('beforeend',taskHTML)
}
else{
        const taskHTML = ` <li class="list-group-item task">
    <div class="div-task">
     <label class="check option">
         <input class="check__input" data-action="done" type="checkbox">
         <span class="check__box"></span>
     <b class="task-title">${taskText}</b>
     </label> 
    </div>
    <div class="task-item__buttons">
         <button type="button" data-action="delete" class="btn-action">
             <img src="img/trush.png" alt="Done" width="18" height="18">
         </button>
     </div>
 </li>`;

 tasksList.insertAdjacentHTML('beforeend',taskHTML)
    }
//очищаем инпут после добавления задачи
taskInput.value=""
taskInput.focus()
}

function deleteTask(event){
    
    if (event.target.dataset.action === 'delete'){
       const parentNode = event.target.closest('li');
       parentNode.remove()
    }
    
}

function doneTask(event){
    if (event.target.dataset.action==='done'){
        const parentNode = event.target.closest('.list-group-item');
        const taskTitle = parentNode.querySelector('b');
        taskTitle.classList.toggle('task-title--done');
        console.log(taskTitle)
    }
}

function cleanBtn(){
    taskInput.value="";
    taskInput.focus();
    prioritetSign.checked = false;
    
}