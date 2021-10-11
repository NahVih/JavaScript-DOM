const list = document.querySelector("#tasksList ul");
let clickHistory = new Array();
console.log(clickHistory);

// remove task
list.addEventListener("click", function (e) {
  if (e.target.className == "remove") {
    const value = e.target.parentElement;
    list.removeChild(value);
    countingTasks();
  }
});

list.addEventListener("click", function (e) {
  if (e.target.className != "remove") {
    const value = e.target.textContent;
    console.log(value);
    clickHistory.push(value);
    console.log(clickHistory);
  }
});

// add task

const addForm = document.forms["add-tasks"];
addForm.addEventListener("submit", function (e) {
  const value = addForm.querySelector('input[type="text"]').value;
  e.preventDefault();

  // add Create Element

  const li = document.createElement("li");
  const taskName = document.createElement("p");
  const taskDelete = document.createElement("button");

  // add Create Context

  taskDelete.textContent = "Remove";
  taskName.textContent = value;

  // add class

  taskName.classList.add("taskName");
  taskDelete.classList.add("remove");

  // add append

  li.appendChild(taskName);
  li.appendChild(taskDelete);
  list.appendChild(li);
  countingTasks();
});

function countingTasks() {
  const totalNumber = document.querySelectorAll("#listOfTasks li");
  console.log(totalNumber.length);
  document.getElementById("numberOfTasksId").innerHTML =
    "Total Tasks: " + totalNumber.length;
}
countingTasks();

const searchBar = document.forms["search-tasks"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const tasks = list.getElementsByTagName("li");
  Array.from(tasks).forEach(function (task) {
    const title = task.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
});
