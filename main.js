( () =>{

const btn = document.querySelector("[data-form-btn]");


const createTask = (event) =>{
    event.preventDefault();

    const  input = document.querySelector("[data-form-input]");

    const inputValue = input.value;

    const cardsList = document.querySelector("[data-cardList]")

    const task = document.createElement("li");

    task.classList.add("card");
    
    input.value = "";

    const listContent = document.createElement(`div`);
    listContent.appendChild(listCheck());
    
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = inputValue
    listContent.appendChild(titleTask)
    
  /* ` <i class="fas fa-trash-alt trashIcon icon"></i>`*/
    
    //task.innerHTML = listContent;
    task.appendChild(listContent);
    cardsList.appendChild(task);
}

btn.addEventListener("click", createTask);


const listCheck = () =>{
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon") ;
    i.addEventListener("click", checkOk);
    return i
}

const checkOk = (event) =>{
    const element = event.target; 
    //toggle nos permite verificar si la clase se encuentra o no activa
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}
})();
