const taskAPIFunctions = {

  getTasks(){
    return fetch("http://localhost:8088/tasks")
    .then(tasks => tasks.json())
    .then(parsedTasks => parsedTasks)
  },
  postTask(obj){
    return fetch("http://localhost:8088/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
  }
}
export default taskAPIFunctions