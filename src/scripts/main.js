import registerUser from "./Components/Login/registerUser";
// import hideDiv from "./Components/Login/classChanger"
// import sessionStorageSetup from "./User_login/session_storage";
// event listener for sign up and register buttons
import taskDiv from "./Components/Tasks/task"
let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")

newUsers.addEventListener("click", ()=> {
   registerUser()
   alert("Welcome to our webpage")
})
existingUserButton.addEventListener("click", ()=>{
   registerUser()
   alert("Welcome to our webpage")
})

console.log(taskDiv())

// const message = document.querySelector("#messsageNav")

