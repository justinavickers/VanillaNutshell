import registerUser from "./Components/Login/registerUser"
import hideDiv from "./Components/Login/classChanger"
import tasksToDom from "./Components/Tasks/injectTask"
import articleContentDOM from "./Components/Articles/articlePost"
import eventsDom from "./Components/Events/displayEvents"

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout= document.querySelector("#logOutNav")
let taskNav = document.querySelector("#taskNav")
const article = document.querySelector("#articleNav")
let eventNav = document.querySelector("#eventNav")

logout.addEventListener("click",()=> {hideDiv.LogOut()})
newUsers.addEventListener("click", ()=> {
   registerUser()
})
existingUserButton.addEventListener("click", ()=>{
   registerUser()
})
taskNav.addEventListener("click", ()=> {
  tasksToDom()
})
article.addEventListener("click", ()=> {
   articleContentDOM()
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
   // const event= document.querySelector("#eventNav")

