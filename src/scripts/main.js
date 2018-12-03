import registerUser from "./Components/Login/registerUser"
import hideDiv from "./Components/Login/classChanger"
import tasksToDom from "./Components/Tasks/injectTask"
import articleContentDOM from "./Components/Articles/articlePost"
import eventsDom from "./Components/Events/displayEvents"
import messageToDom from "./Components/Messages/messageDisplay"
import newTaskCreation from "./Components/Tasks/postTaskFunction"

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout = document.querySelector("#logOutNav")
const taskNav = document.querySelector("#taskNav")
const message = document.querySelector("#messageNav")
const postTask = document.querySelector("#taskSubmit")
const article = document.querySelector("#articleNav")
let eventNav = document.querySelector("#eventNav")

logout.addEventListener("click", () => { hideDiv.LogOut() })
newUsers.addEventListener("click", () => {
   registerUser()
})
existingUserButton.addEventListener("click", () => {
   registerUser()
})
taskNav.addEventListener("click", () => {
   tasksToDom()
      .then(
         postTask.addEventListener("click", () => {
            newTaskCreation(task)
         })
      )
})
article.addEventListener("click", () => {
   articleContentDOM()
})
message.addEventListener("click", () => {
   messageToDom()
})
eventNav.addEventListener("click", () => {
   eventsDom()
})

// message.addEventListener("click", () => {
   //    location.clear()
   //    messageComponent.messageComponent()})
   // article.addEventListener("click", () =>{ hideDiv.hideArticleDiv()})
   // task.addEventListener("click", () => { hideDiv.hideTaskDiv()})
   // event.addEventListener("click", ()=> { hideDiv.hideEventDiv()})
   // event listener for sign up and register buttons
   // const message = document.querySelector("#messageNav")
   // const article = document.querySelector("#articleNav")
   // const event= document.querySelector("#eventNav")

