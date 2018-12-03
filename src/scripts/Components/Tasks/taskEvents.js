import newTaskCreation from "./postTaskFunction"

function newTask(){

  document.addEventListener("click", (e)=> {
    if(e.target && e.target.id === "taskName"){
      newTaskCreation()
      console.log("it posted")
    }
  })
}
export default newTask