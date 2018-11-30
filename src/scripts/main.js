import registerUser from "./Components/Login/registerUser"
import hideDiv from "./Components/Login/classChanger"
import tasksToDom from "./Components/Tasks/injectTask"
// import sessionStorageSetup from "./User_login/session_storage";
// event listener for sign up and register buttons
// import taskDiv from "./Components/Tasks/task"
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
// const message = document.querySelector("#messageNav")
// const article = document.querySelector("#articleNav")
const task= document.querySelector("#taskNav")
// const event= document.querySelector("#eventNav")
const logout= document.querySelector("#logOutNav")

newUsers.addEventListener("click", ()=> {
   registerUser()
})
existingUserButton.addEventListener("click", ()=>{
   registerUser()
})

// message.addEventListener("click", () => {hideDiv.hideMessageDiv()})
// article.addEventListener("click", () =>{ hideDiv.hideArticleDiv()})
task.addEventListener("click", () => { hideDiv.tasksToDom()})
// event.addEventListener("click", ()=> { hideDiv.hideEventDiv()})
logout.addEventListener("click",()=> {hideDiv.LogOut()})

