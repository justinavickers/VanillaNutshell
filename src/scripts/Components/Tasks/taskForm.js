function taskForm(){
  let taskForm = `
  <div>
  <h1>New Task</h1>
  <input type="text" id="taskName" class="taskName" value="Name"/>
  <input type="date" id="taskDate" class="taskDate" />
  <input type="button" id="taskButton" value="send" class="taskButton"/>
  </div>
  `
  return taskForm
}
export default taskForm