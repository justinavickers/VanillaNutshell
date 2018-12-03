// import taskAPIFunctions from "./taskFetching"

function taskFormDiv(task){
  let taskForm = `
  <div id="taskForm class="taskForm">
  <h1>New Task</h1>
  <input type="text" id="taskName" class="taskName" value="Name">
  <input type="date" id="taskDate" class="taskDate" value="Date">
  <input type="button" id="submitTask" value="submit" class="submitTask">
  <input type="button" id="deleteTask" class="deleteTask">
  </div>
  `
  // let submitTask = document.querySelector("#submitTask")
  // submitTask.addEventListener("click", () => {
  //   taskAPIFunctions.postTask(task)
  // })
  return taskForm
}
export default taskFormDiv