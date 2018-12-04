const taskAPIFunctions = {

  getTasks() {
    return fetch("http://localhost:8088/tasks")
      .then(tasks => tasks.json())
      .then(parsedTasks => parsedTasks)
  },
  postTask(task) {
    return fetch("http://localhost:8088/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    }).then(post => post.json())
  },
  deleteTask(id) {
    return fetch(`http://localhost:8088/tasks/${id}`, {
      method: "DELETE"
    }).then(r => r.json())
  },
  putTask(value, id) {
    console.log("vlaue", value, id)
    return fetch(`http://localhost:8088/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify(value)
    }).then(r => r.json())
    .then(r=> console.log(r))
  }
}
export default taskAPIFunctions