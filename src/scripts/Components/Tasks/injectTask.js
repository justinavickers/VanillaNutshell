import taskAPIFunctions from "./taskFetching"
import taskDiv from "./task"
import taskFormDiv from "./taskForm"

let domEntry = document.querySelector(".domEntry")
function domTask(parsedTasks) {
  parsedTasks.forEach(task => {
    let taskContents = taskDiv(task)
   domEntry.innerHTML += taskContents
  })
}
clearDom=()=>{
  domEntry.innerHTML=""
}

let injection = {

  tasksToDom = () => {
    clearDom()
    taskAPIFunctions.getTasks().then(parsedTasks => domTask(parsedTasks))
    taskFormDiv(task)
  },
  formToDom = () => {
    clearDom()
    taskFormContent = taskFormDiv(taskForm)
    domEntry.innerHTML = taskFormContent
  }
}
export default injection