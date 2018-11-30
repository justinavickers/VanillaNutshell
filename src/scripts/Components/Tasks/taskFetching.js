const taskAPIFunctions = {

  getTasks(){
    return fetch("http://localhost:8088/tasks")
    .then(tasks => tasks.json())
    .then(pasedTasks => pasedTasks)
  }
}
export default taskAPIFunctions