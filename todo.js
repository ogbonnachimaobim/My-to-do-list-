//refrence to the input form
const addform= document.querySelector('.add');

//refrence to the ul
const list=document.querySelector('.todos')

const generateTemplate= todo =>{

    //we add new html tamplate to the existing one by calling  the todo
    const html=`
        <l1 class="list-group-item d-flex align-center justify-content-between text-light">
             <span>${todo}</span>
             <i class="icofont-trash delete"></i>
        </l1>
    `
    list.innerHTML+=html
}

//call the input field and prevent defult setting
addform.addEventListener('submit',e=>{
    e.preventDefault();

    //pick the typed value from the input and trim the spaces
    const todo=addform.add.value.trim();

   if (todo.length) {
        generateTemplate(todo);
        addform.reset();   //reset will reset the form input
   }
})

//How to delete todos

list.addEventListener('click', e=>{

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})