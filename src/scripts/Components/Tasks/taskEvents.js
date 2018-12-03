import newTaskCreation from "./postTaskFunction"

function newTask(){
  document.addEventListener("click", function (e){
    if (e.target && e.target.id === "taskButton"){
      newTaskCreation()
      console.log("it posted")
    }
  })
}
export default newTask