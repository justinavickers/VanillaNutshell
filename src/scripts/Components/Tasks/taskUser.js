function taskDiv(task){

  let editButtons =
   `<input type='button' value='edit' id='editButton' class=${task.id} />
  <input type='button' value='delete' class=${task.id} id='deleteButton' />`
  let tasks=
    `
    <div id="task" class="emptyContainer">
    <p>${task.name}</p>
    <p>${task.valueAsDate}</p>
    ${task.user_id === sessionStorage.user_id ?
      editButtons: ""}
    </div>
  `
  return tasks
  }
  export default taskDiv