const btn = document.querySelector("[data-form-btn]");


const createTask = (event) =>{
    event.preventDefault();
    const  input = document.querySelector("[data-form-input]");
    const inputValue = input.value;
    const cardsList = document.querySelector("[data-cardList]")
    const task = document.createElement("li");
    task.classList.add("card")
    
    input.value = "";
    const content = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${inputValue}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;
    cardsList.appendChild(task);
}

btn.addEventListener("click", createTask);



