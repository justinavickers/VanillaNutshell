import taskAPIFunctions from "./taskFetching"
import tasksToDom from "./taskDisplay"
function editTask(value, id) {
  console.log("edit task", value, id)
  taskAPIFunctions.putTask(value, id)
    .then(() => {
      document.querySelector(".domEntry").innerHTML = ""
      tasksToDom()
    }
    )
}

export default editTask