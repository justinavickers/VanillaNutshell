import taskAPIFunctions from "./taskFetching"
import taskDiv from "./taskUser"
import taskForm from "./taskForm"

let domEntry = document.querySelector(".domEntry")
function domTask(parsedTasks) {
  parsedTasks.forEach(task => {
    let taskContents = taskDiv(task)
   domEntry.innerHTML += taskContents
  })
}
let tasksToDom = () => {
    domEntry.innerHTML=""
    // domEntry.innerHTML += taskForm()
    taskAPIFunctions.getTasks()
    .then(parsedTasks => domTask(parsedTasks))
    .then(() => {
      domEntry.innerHTML += taskForm()
    })
  }
export default tasksToDom