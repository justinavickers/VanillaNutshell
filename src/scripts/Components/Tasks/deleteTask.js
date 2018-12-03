import taskAPIFunctions from "./taskFetching"
import tasksToDom from "./taskDisplay"
function deleteTask(e){
  console.log(e)
  taskAPIFunctions.deleteTask(e).then(
    tasksToDom
  )
} import messageFetching from "./fetching"
import messagesToDom from "./messageDisplay"
function editMessage(value, id){
    console.log(value)
    console.log(id)
messageFetching.putFunction(value, id)
.then( messagesToDom())
}

export default editMessage
export default deleteTask