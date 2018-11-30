import taskAPIFunctions from "./taskFetching"
import taskDiv from "./task"
// import taskFormDiv from "./taskForm"
let domTask = document.querySelector("#taskContainer")
const taskInjection = function (parsedTasks) {
    parsedTasks.forEach(task => {
        let taskContents = taskDiv(task)
        domTask.innerHTML = taskContents
      })
      console.log(parsedTasks, "parsed")
    }

    function clearTasks() {
        domTask.innerHTML = ""
      }


//     function injection(){
//   innerHTML = ""
//   taskFormDiv()
// }

const  tasksToDom = () => {
    clearTasks()
    taskAPIFunctions.getTasks()
    .then(parsedTasks =>
      taskInjection(parsedTasks))
    }
export default tasksToDom