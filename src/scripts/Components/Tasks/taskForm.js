// import taskAPIFunctions from "./taskFetching"

function taskForm(){
  let taskForm = `
  <div id="taskForm class="taskForm">
  <h1>New Task</h1>
  <input type="text" id="taskName" class="taskName" value="Name"/>
  <input type="date" id="taskDate" class="taskDate" />
  <input type="button" id="taskButton" value="submit" class="taskButton"/>
  <input type="button" id="deleteTask" class="deleteTask"/>
  </div>
  `
  return taskForm
}
export default taskForm