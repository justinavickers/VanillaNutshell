function taskFormDiv(task){
  let taskForm = `
  <div id="taskForm class="taskForm">
  <h1>New Task</h1>
  <input type="text" id="taskName" class="taskName" value="New Task">
  <input type="date" id="taskDate" class="taskDate" value="Date">
  <input type"checkbox" id="taskCompleted">
  <input type="button" id="submitTask" class="submitTask">
  <input type="button" id="deleteTask" class="deleteTask">
  </div>
  `
  return taskForm
}
export default taskFormDiv