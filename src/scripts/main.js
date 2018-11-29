import registerUser from "./Login/registerUser"

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
newUsers.addEventListener("Click", ()=> {
  registerUser()
  alert("Welcome to our webpage")
})
existingUserButton.addEventListener("Click", ()=>{
  registerUser()
  alert("Welcome to our webpage")
})
