

 const todoButton = document.getElementById('todo-button');
 const todoInput = document.getElementById('todo-input');
 const todoList = document.getElementById('todo-list')

//Event Listeners
  todoList.addEventListener('click', deleteCheck);


//Functions
function addTodo(event) {

  if(todoInput.value === ""){
    alert("Please type something to Add")
    todoInput.focus();

  }else{

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const AddButton = document.createElement('button');
  AddButton.innerHTML = '<i class="fas fa-check"></i>'
  AddButton.classList.add("complete-btn");
  todoDiv.appendChild(AddButton);

  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
  newToDo.classList.add('todo-item');
  todoDiv.appendChild(newToDo);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
  alert("Successfully Added")
}
}

function deleteCheck(e) {
  const item = e.target;
  const todo = item.parentElement;

  //Delete button
  if(item.classList[0] === "trash-btn"){
    todo.classList.add('fall')
    todo.addEventListener("transitionend", function(){
      todo.remove();
      alert("List item Deleted")
    })
  }
  //Checked button
  else if(item.classList[0] === "complete-btn"){
    todo.classList.toggle("completed");
    alert("List item Checked")
  }
};

