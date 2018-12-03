import newTaskCreation from "./postTask"
import deleteTask from "./deleteTask"

const taskManager = {

  newTask() {
    document.addEventListener("click", function (e) {
      if (e.target && e.target.id === "taskButton") {
        newTaskCreation()
        console.log("it posted")
      }
    })
  },
  deleteTask() {
    document.addEventListener("click", function (e) {
      if (e.target && e.target.id === "deleteButton") {
        let taskIdNumber = e.target.className
        deleteTask(taskIdNumber)
      }
    })
  }
}
export default taskManager