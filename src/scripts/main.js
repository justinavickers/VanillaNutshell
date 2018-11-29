
import userAPIFunctions from "./Components/Login/fetching"


let existingUserButton = document.querySelector("#loginButton")
let newUsers = document.querySelector("#signUpButton")
newUsers.addEventListener("click", ()=> {
  alert("Welcome to our webpage")
})
existingUserButton.addEventListener("click", ()=>{
  alert("Welcome to our webpage")
})

userAPIFunctions.getUsers()
