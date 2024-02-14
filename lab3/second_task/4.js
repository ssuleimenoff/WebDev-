let todoList = [];

function addItem() {
    const item = document.getElementById("item").value;
    if (item !== "") {
        todoList.push({text: item, done: false});
        document.getElementById("item").value = "";
        updateTodoList();
    }
}
function markDone(index) {
    todoList[index].done = true;
    updateTodoList();
    const li = document.getElementsByTagName("li")[index];
    li.classList.add("done");
}
function deleteItem(index) {
    todoList.splice(index, 1);
    updateTodoList();
}
function updateTodoList() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        const item = todoList[i];
        const li = document.createElement("li");
        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = item.done;
        check.onclick = function() {markDone(i)};
        const text = document.createElement("span");
        text.innerHTML = item.text;
        const deleteButton = document.createElement("button");
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "84-842915_delete-icon-png-red.png";
        deleteIcon.alt = "Delete";
        deleteButton.appendChild(deleteIcon);
        deleteButton.onclick = function() {deleteItem(i)};
        li.appendChild(check);
        li.appendChild(text);
        li.appendChild(deleteButton);
        list.appendChild(li);
    }
}
updateTodoList();