import userAPIFunctions from "./fetching"
// sends user into session storage and sends their information to the pages
function loginUser(){
  sessionStorage.clear()
  let email=document.querySelector("#login").value
  userAPIFunctions.getUsers(email)
  .then((user)=>{
    console.log(user)
    let validated=validatedPassword(user)
    console.log("Setting session storage", user)
     if(validated){
      sessionStorage.setItem("user_id", user.id)
    } else {
      alert("Wrong Password yea bloody wanka!")
    }
  })
}

function validatedPassword(user){
  const passwordValue= document.querySelector("#password")
  console.log(user.password)
  console.log(passwordValue)
  if (user.password===passwordValue.value){
    return true
  } else {
    return false
  }
}
export default loginUser