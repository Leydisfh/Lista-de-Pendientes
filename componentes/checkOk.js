
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
export default listCheck;