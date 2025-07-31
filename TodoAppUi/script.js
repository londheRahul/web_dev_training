function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

var outerc = document.getElementById("outer-container");
const tasks = [];

function addtask() {
  var taskValue = document.getElementById("TaskTitle").value.trim();
  var priorityValue = document.querySelector('input[name="priority"]:checked').value;

  if (taskValue !== "" && priorityValue) {
    const newTask = {
      title: taskValue,
      createdAt: new Date().toLocaleDateString(),
      priority: priorityValue,
      completed: false
    };
    tasks.push(newTask);
    check();
    document.getElementById("taskF").reset();
    closePopup();
  } else {
    alert("Please enter a task title and select priority.");
  }
}

function check() {
  if (tasks.length > 0) {
    var completedTasks = tasks.filter(t => t.completed).length;
    var containerdatanot = `
      <div id="container-ifnotempt">
        <div class="container-innerDiv">
          <div class="subdiv"><h6>Total Tasks</h6><h1>${tasks.length}</h1></div>
          <div class="subdiv"><i class="ri-list-check-3"></i></div>
        </div>
        <div class="container-innerDiv">
          <div class="subdiv"><h6>Completed Tasks</h6><h1>${completedTasks}</h1></div>
          <div class="subdiv"><i class="ri-task-line"></i></div>
        </div>
        <div class="container-innerDiv">
          <div class="subdiv"><h6>Success Rate</h6><h1>${Math.round((completedTasks / tasks.length) * 100)}%</h1></div>
          <div class="subdiv"><i class="ri-stairs-line"></i></div>
        </div>
        <div class="container-innerDiv1">
          <div class="subdiv1"><h5>Pending Tasks</h5><i class="fa-solid fa-chart-column"></i></div>
          <div class="subdiv2"><h6>High</h6><p>${tasks.filter(t => t.priority === "High" && !t.completed).length}</p></div>
          <div class="subdiv2"><h6>Medium</h6><p>${tasks.filter(t => t.priority === "Medium" && !t.completed).length}</p></div>
          <div class="subdiv2"><h6>Low</h6><p>${tasks.filter(t => t.priority === "Low" && !t.completed).length}</p></div>
        </div>
      </div>
    `;
    outerc.innerHTML = containerdatanot;
    var taskListDiv = document.createElement("div");
    taskListDiv.className = "tasklistdata";

    tasks.forEach((task, index) => {
      var taskItem = document.createElement("div");
      taskItem.className = "task-item";
      taskItem.innerHTML = `
       <div id="task-div1">
        <input type="checkbox" onchange="toggleTaskStatus(${index})" ${task.completed ? "checked" : ""}>
         
       </div>
       <div id="task-div2">
       <p><strong>${task.title}</strong></p>
       <p>${task.priority}</p>
       <p>${task.createdAt}</p>
       </div>
       
       <div id="task-div3">
       <button onclick="deleteTask(${index})"><i class="ri-delete-bin-fill"></i></button>
       </div>
      `;
     task.completed ? "taskItem.style.color='black'" : "";
      taskListDiv.appendChild(taskItem);
    });

    outerc.appendChild(taskListDiv);
  } else {
    var containerdataEmpty = `
      <div class="container">
        <img src="images/Background.jpg" alt="">
        <h1>No Task Yet</h1>
        <p class="subtext">Create your first task to get started on your productivity journey</p>
        <button onclick="openPopup()">Add Your First Task</button>
      </div>
    `;
    outerc.innerHTML = containerdataEmpty;
  }
}

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    check();
  }
}

function toggleTaskStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  check();
}


check();
