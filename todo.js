// task =   {name:string, completed: boolean }
const tasks = [];

// get the input form //
const taskInput = document.getElementById("todo-input");
const addBtn = document.getElementById("addbtn");
const listTask = document.getElementById("list-task");
const alerttt = document.getElementById("alerrt");
const clear = document.getElementById("clear-btn");

clear.addEventListener("click", function () {
  taskInput.value = "";
});

const handleDeleteClick = function (e) {
  console.log("DELETE!", e);
};

addBtn.addEventListener("click", function () {
  console.log("input value:", taskInput.value);

  // remove element error hint
  const error = document.getElementsByClassName("error");

  if (error.length) {
    document.getElementsByClassName("error")[0].remove();
  }

  if (!taskInput.value) {
    taskInput.classList.add("is-invalid");

    const alertt = document.createElement("p");

    alertt.innerHTML = `<p class="error" style="color: red;">please fill out the field</p>`;

    alerttt.appendChild(alertt);
  } else {
    const task = {
      description: taskInput.value,
      completed: false,
    };
    const currentindex = tasks.length;

    tasks.push(task);

    const li = document.createElement("li");

    li.classList.add("list-group-item");
    li.id = `list-group-item-${currentindex}`;

    li.innerHTML = `
            <input class="form-check-input checkboxtask" type="checkbox" value="" id="firstCheckbox ${currentindex}">
            <label class="form-check-label center ptxt" for="firstCheckbox${currentindex}">${task.description}</label>
            <button type="button" class="btn btn-danger remove-btn" id="removebtn-${currentindex}" data-id="${currentindex}">Delete</button>
        `;

    console.log(li);

    // append task element
    listTask.appendChild(li);

    //
    const rmvbtn = document.getElementById(`removebtn-${currentindex}`);

    rmvbtn.addEventListener("click", function (e) {
      if (window.confirm("Are you want to delete?")) {
        const liToDelete = document.getElementById(
          `list-group-item-${currentindex}`
        );

        liToDelete.remove();
      }
    });
  }
  taskInput.value = "";
});
