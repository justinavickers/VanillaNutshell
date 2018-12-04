function taskDiv(task){
  let tasks=`
  <div id="task"  user_id=${task.user_id} class="task">
  <h1>${task.name}</h1>
  <p>Completion date: ${task.valueAsDate}</p>
  <input type="button" value="Edit"/>
`
return tasks
}
export default taskDiv