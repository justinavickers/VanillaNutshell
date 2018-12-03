import taskAPIFunctions from "./taskFetching"
import taskForm from "./taskForm"

function newTaskCreation(task){
  let taskName = document.querySelctor(".taskName")
  let taskDate = taskForm.document.querySelctor(".taskDate")
 

  task = {
    userId: sessionStorage.getItem("user_id"),
    taskName: taskName.value,
    taskDate: taskDate.valueAsDate,
    taskCompleted: false
    }
      taskAPIFunctions.postTask(task)
      .then(() => {
        return newTaskCreation(task)
      }
    )}

export default newTaskCreation