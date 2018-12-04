import taskAPIFunctions from "./taskFetching"
import tasksToDom from "./taskDisplay"
function newTaskCreation(){
 const task = {
    user_id: sessionStorage.user_id,
    name: document.querySelector("#taskName").value,
    date: document.querySelector("#taskDate").value,
    completed: false
    }
    taskAPIFunctions.postTask(task).then(() => {
      tasksToDom()
    })
 }
export default newTaskCreation