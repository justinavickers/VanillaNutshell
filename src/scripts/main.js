import registerUser from "./Components/Login/registerUser";
import hideDiv from "./Components/Login/classChanger"
// import sessionStorageSetup from "./User_login/session_storage";
// event listener for sign up and register buttons
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const message = document.querySelector("#messageNav")
const article = document.querySelector("#articleNav")
const task= document.querySelector("#taskNav")
const event= document.querySelector("#eventNav")
const logout= document.querySelector("#logOutNav")
newUsers.addEventListener("click", ()=> {
   registerUser()
   alert("Welcome to our webpage")
})
existingUserButton.addEventListener("click", ()=>{
   registerUser()
   alert("Welcome to our webpage")
})

message.addEventListener("click", () => {hideDiv.hideMessageDiv()})
article.addEventListener("click", () =>{ hideDiv.hideArticleDiv()})
task.addEventListener("click", () => { hideDiv.hideTaskDiv()})
event.addEventListener("click", ()=> { hideDiv.hideEventDiv()})
logout.addEventListener("click",()=> {hideDiv.LogOut()})

