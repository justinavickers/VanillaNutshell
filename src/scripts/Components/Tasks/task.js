import taskAPIFunctions from "./taskFetching"

function taskDiv(task){
  taskAPIFunctions.getTasks()
  .then()
  let tasks=`
  <div id="taskDiv" class="taskDiv">
  <h1>${task.name}</h1>
  <p>Completion date: ${task.date}</p>
  </div>
  `
  return console.log(tasks)
}
export default taskDiv