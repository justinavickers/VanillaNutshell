import registerUser from "./Components/Login/registerUser"
import hideDiv from "./Components/Login/classChanger"
import tasksToDom from "./Components/Tasks/taskDisplay"
import articleContentDOM from "./Components/Articles/articlePost"
import eventsDom from "./Components/Events/displayEvents"
import eventListening from "./Components/Events/eventListeners"
import messageToDom from "./Components/Messages/messageDisplay"
import taskManager from "./Components/Tasks/taskEvents"
import loginUser from "./Components/Login/loginUser"
import messageFunctionality from "./Components/Messages/messageEventListners";
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout = document.querySelector("#logOutNav")
const taskNav = document.querySelector("#taskNav")
const message = document.querySelector("#messageNav")
// const postTask = document.querySelector("#taskSubmit")
const article = document.querySelector("#articleNav")
let eventNav = document.querySelector("#eventNav")

logout.addEventListener("click",()=> {
   hideDiv.LogOut()
})

newUsers.addEventListener("click", ()=> {
registerUser()
})

existingUserButton.addEventListener("click", ()=>{
loginUser()
})

taskNav.addEventListener("click", ()=> {
tasksToDom()
taskManager.newTask()
taskManager.deleteTask()
taskManager.editButton()
})


article.addEventListener("click", ()=> {
articleContentDOM()
})

message.addEventListener("click", ()=> {
messageToDom()
messageFunctionality.messageButton()
// messageFunctionality.editButton()
messageFunctionality.deleteButton()
})
eventNav.addEventListener("click", () => {
  eventsDom()
  // eventListening.submitEvent()
  // eventListening.editEvent()
  // eventListening.deleteEvent()
})