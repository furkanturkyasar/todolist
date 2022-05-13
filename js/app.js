let inputDOM = document.querySelector("#task")
let listDOM = document.querySelector("#list")
//let listLengthDOM = document.getElementsByTagName("li")

const checked = (e) => {
    const item = e.target
    item.classList.toggle("checked")
}

const deleteItem = (e) => {
    const item = e.target.parentElement
    item.remove()
    dltStorage(e.target.previousElementSibling.innerText)
}

const startConf = () => {
    let todo = JSON.parse(localStorage.getItem("todo"))

    if(!todo) {
        localStorage.setItem("todo", JSON.stringify([]))
    } else {
        todo.forEach(todo => {
            addHTML(todo)
        });
    }
}

const addHTML = (todo) => {
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("list-item")

    const newTodo = document.createElement("li")
    newTodo.classList.add("todo-item")
    newTodo.addEventListener("click", checked)
    newTodo.innerHTML = todo
    todoDiv.appendChild(newTodo)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "\u00D7"
    deleteButton.classList.add("btn-delete")

    deleteButton.addEventListener("click", deleteItem)
    todoDiv.appendChild(deleteButton)
    
    listDOM.appendChild(todoDiv)

}

const newElement = () => {
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("list-item")

    const newTodo = document.createElement("li")
    newTodo.classList.add("todo-item")
    newTodo.addEventListener("click", checked)
    newTodo.innerText = inputDOM.value
    todoDiv.appendChild(newTodo)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "\u00D7"
    deleteButton.classList.add("btn-delete")

    deleteButton.addEventListener("click", deleteItem)
    todoDiv.appendChild(deleteButton)

    if(inputDOM.value != "") {
        listDOM.appendChild(todoDiv)
        loadStorage(inputDOM.value)
        inputDOM.value = ""
        $(".success").toast("show")
    } else {
        $(".error").toast("show")
    }
}

const loadStorage = (text) => {
    let str = JSON.parse(localStorage.getItem("todo"))
    let todo;
    if(str == null) {
        todo = []
    } else {
        todo = JSON.parse(localStorage.getItem("todo"))
    }
    todo.push(text)
    localStorage.setItem("todo", JSON.stringify(todo))
} 



const dltStorage = (text) => {
    let todo = JSON.parse(localStorage.getItem("todo"))

    todo.forEach((element, id) => {
        if (element === text) {
          todo.splice(id, 1);
        }
      })
      localStorage.setItem("todo", JSON.stringify(todo));
}

startConf()