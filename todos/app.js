const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');


//reusable function that'll create an li template from todo input
const addTodo = (todo) => {

    // template literal 

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="trashIcon material-icons">delete</i>
                </li>`;

    //adds the template to the list
    todoList.innerHTML += html;

}
//event that submits input items to the todo list 
addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //takes the value of the add inputfield of the add form
    const todoText = addForm.add.value.trim(); //.trim(); trims spaces in text    console.log(addTodo);
    // if field is empty input will not submit.
    if (todoText.length) {
        //calling the template
        addTodo(todoText);
    }
});

//deleting todos
// event delegation is used here

todoList.addEventListener('click', (e) => {

    // Checks if the clicked target contains the specific class (trashIcon), it deletes the todo
    if (e.target.classList.contains('trashIcon')) {
        //targets the parent element of trashIcon which is an li and removes it.
        e.target.parentElement.remove();
    }

})