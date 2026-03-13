const list = document.querySelector("ul");
const input = document.querySelector("#student");
const addBtn = document.querySelector(".addStudent");
const counterSpan = document.querySelector(".counter span");

let students = JSON.parse(localStorage.getItem("students")) || [];

function updateCounter() {
  counterSpan.textContent = students.length;
}

function save() {
  localStorage.setItem("students", JSON.stringify(students));
}

function createListItem(name) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = name;
  deleteBtn.textContent = "Delete";

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  deleteBtn.addEventListener("click", () => {
    li.style.animation = "fadeOut 0.4s forwards";

    setTimeout(() => {
      list.removeChild(li);
      students = students.filter((s) => s !== name);
      save();
      updateCounter();
    }, 400);
  });
}

function loadStudents() {
  students.forEach((name) => createListItem(name));
  updateCounter();
}

addBtn.addEventListener("click", () => {
  const name = input.value.trim();
  if (!name) return;

  if (students.map((s) => s.toLowerCase()).includes(name.toLowerCase())) {
    alert("This student is already in the list.");
    input.value = "";
    input.focus();
    return;
  }

  students.push(name);
  save();
  createListItem(name);
  updateCounter();

  input.value = "";
  input.focus();
});

loadStudents();
