import taskAPIFunctions from "./taskFetching"
import tasksToDom from "injectTask"
function newTaskCreation(){
  // let taskName = document.querySelctor("#taskName")
  // let taskDate = document.querySelctor("#taskDate")
 const task = {
    userId: sessionStorage.user_id,
    taskName: document.querySelector(".taskName").value,
    taskDate: document.querySelector(".taskDate").value,
    taskCompleted: false
    }
    taskAPIFunctions.postTask(task).then(() => {
      tasksToDom()
    })
 }
export default newTaskCreation