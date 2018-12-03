import registerUser from "./Components/Login/registerUser"
import hideDiv from "./Components/Login/classChanger"
import tasksToDom from "./Components/Tasks/injectTask"
import articleContentDOM from "./Components/Articles/articleDisplay"
import eventsDom from "./Components/Events/displayEvents"
import eventListening from "./Components/Events/eventListeners"
import messageToDom from "./Components/Messages/messageDisplay"
import loginUser from "./Components/Login/loginUser"
import messageFunctionality from "./Components/Messages/messageEventListners";
import articleListening from "./Components/Articles/articleListeners";

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout= document.querySelector("#logOutNav")
const message = document.querySelector("#messageNav")
let taskNav = document.querySelector("#taskNav")
let article = document.querySelector("#articleNav")
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
})

message.addEventListener("click", ()=> {
messageToDom()
messageFunctionality.messageButton()
// messageFunctionality.editButton()
messageFunctionality.deleteButton()
})
eventNav.addEventListener("click", () => {
  eventsDom()
  eventListening.submitEvent()
  eventListening.editEvent()
  eventListening.deleteEvent()
})

article.addEventListener("click", ()=> {
   articleContentDOM()
   articleListening.deleteButton()
})