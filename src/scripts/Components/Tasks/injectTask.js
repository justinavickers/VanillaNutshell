import taskAPIFunctions from "./taskFetching"
import taskDiv from "./task"

let domEntry = document.querySelector(".domEntry")
function domTask(parsedTasks) {
  parsedTasks.forEach(task => {
    let taskContents = taskDiv(task)
   domEntry.innerHTML = taskContents
  })
}

let tasksToDom = () => {
  domEntry.innerHTML=""
  taskAPIFunctions.getTasks().then(parsedTasks => domTask(parsedTasks))
}
export default tasksToDom