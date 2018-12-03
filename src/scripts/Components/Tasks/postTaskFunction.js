import taskAPIFunctions from "./taskFetching"
import taskForm from "./taskForm"

function newTaskCreation(task){
  let taskName = taskForm.document.querySelctor("#task.name")
  let taskDate = taskForm.document.querySelctor("#task.date")
  let submitTask = taskForm.document.querySelctor("#task.submit")

  task = {
    userId: sessionStorage.getItem("user_id"),
    taskName: taskName.value,
    taskDate: taskDate.valueAsDate,
    taskCompleted: false
    }
    submitTask.addEventListener("click", () => {
      taskAPIFunctions.postTask(task)
      .then(() => {
        return newTaskCreation(task)
      })
    })
}
export default newTaskCreation

// function newTaskCreation() {
//     let taskName = document.querySelector("#taskName")
//     let taskDate = document.querySelector("#taskDate")
// // builds task and posts to database
//     let obj = {
//         userId: sessionStorage.getItem("user_id"),
//         taskName: taskName.value,
//         taskDate: taskDate.valueAsDate,
//         taskCompleted: false
//     }
//     taskAPIFunctions.postTask(obj)
//     .then(() => {
//         return newTaskCreation(obj)
//     })
// }
// export default newTaskCreation=