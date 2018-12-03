import taskAPIFunctions from "./taskFetching"
import tasksToDom from "./taskDisplay"
function deleteTask(e){
  console.log(e)
  taskAPIFunctions.deleteTask(e).then(
    tasksToDom
  )
}
export default deleteTask