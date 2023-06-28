import listCheck from "./componentes/checkOk.js";
import deleteIcon from "./componentes/deleteIcon.js";

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
    
 
    /*listContent.appendChild(deleteIcon());*/
    //task.innerHTML = listContent;
    task.appendChild(listContent);
    task.appendChild(deleteIcon());
    cardsList.appendChild(task);
}

btn.addEventListener("click", createTask);

})();
