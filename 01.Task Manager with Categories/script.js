const container = document.querySelector(".taskContainer");
const selector = document.getElementById("selector");
const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");

function task(inputValue,box){
    const task = document.createElement("div");
    const checkbox = document.createElement("div");
    const input = document.createElement("input");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    task.classList.add("task");
    checkbox.classList.add("checkbox");
    input.type = "text";
    editBtn.setAttribute("id","editBtn");
    deleteBtn.setAttribute("id","deleteBtn");

    input.value = inputValue;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    task.appendChild(checkbox);
    task.appendChild(input);
    task.appendChild(editBtn);
    task.appendChild(deleteBtn);
    box.appendChild(task);
}
addBtn.addEventListener("click",() => {
    const box = document.querySelector(`.${selector.value}`)
    console.log(inputBox.value + " and " + selector.value);
    task(inputBox.value,box)
})
