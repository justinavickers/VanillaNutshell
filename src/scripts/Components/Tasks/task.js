function taskDiv(task){
  let tasks=`
  <div id="taskDiv" class="taskDiv">
  <h1>${task.name}</h1>
  <p>Completion date: ${task.date}</p>
  </div>
`
return tasks
}
export default taskDiv