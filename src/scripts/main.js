import registerUser from "./Components/Login/registerUser"
import hideDiv from "./Components/Login/classChanger"
import messageComponent from "./Components/Messages/messageDisplay"
<<<<<<< HEAD
import eventDisplay from "./Components/Events/eventDisplay";
=======
import tasksToDom from "./Components/Tasks/injectTask"
>>>>>>> master

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout= document.querySelector("#logOutNav")
let taskNav = document.querySelector("#taskNav")

logout.addEventListener("click",()=> {hideDiv.LogOut()})
newUsers.addEventListener("click", ()=> {
   registerUser()
})
existingUserButton.addEventListener("click", ()=>{
   registerUser()
})
<<<<<<< HEAD

messageComponent()
eventDisplay()


// message.addEventListener("click", () => {
   //    location.clear()
   //    messageComponent.messageComponent()})
=======
taskNav.addEventListener("click", ()=> {
   tasksToDom()
})
>>>>>>> master
   // article.addEventListener("click", () =>{ hideDiv.hideArticleDiv()})
   // task.addEventListener("click", () => { hideDiv.hideTaskDiv()})
   // event.addEventListener("click", ()=> { hideDiv.hideEventDiv()})
   // event listener for sign up and register buttons
   // const message = document.querySelector("#messageNav")
   // const article = document.querySelector("#articleNav")
   // const event= document.querySelector("#eventNav")

