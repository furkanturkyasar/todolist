let taskDOM = document.querySelector("#task")
let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let listLengthDOM = document.getElementsByTagName("li")

for(let i = 0; i < listLengthDOM; i++) {
    let closeButton = document.createElement("span")
    closeButton.textContent = "\u00D7"
    closeButton.classList.add("close")
    closeButton.onclick = removeButton
    listLengthDOM[i].append(closeButton)
    listLengthDOM[i].onclick = check
}

function removeButton() {
    this.parentElement.remove()
}

function check() {
    this.classList.toggle("checked")
}

btnDOM.addEventListener("click", addElement)

function addElement() {
    if(taskDOM.value == "") {
        $(".error").toast("show")
    } else {
        $(".success").toast("show")
        let liDOM = document.createElement("li")
        listDOM.append(liDOM)
        liDOM.innerHTML = task.value
        taskDOM.value = ""

        liDOM.onclick = check

        let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7"
        closeButton.classList.add("close")
        closeButton.onclick = removeButton

        liDOM.append(closeButton)
        listDOM.append(liDOM)
        inputElement.value = ""
    }

    
}