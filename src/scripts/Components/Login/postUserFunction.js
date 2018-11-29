import userAPIFunctions from "./fetching"
// import sessionStorage from "./session_storage"

// Post new users into database
const registration = {
  //checks to see if email is populated in json database already
  emailVerification() {
    let email = document.querySelector(".login")
    userAPIFunctions.getUser()
      .then((users) => {
        console.log(users)
        if (users.email === email.value) {
          alert("You suck. No login for you.")
        } else {
          newUserCreation()
        }
      })
    }
  }

  //  function  newUserCreation() {
  //     let login = document.querySelector("#login")
  //     let password = document.querySelector("#password")

  //     let obj = {
  //       email: "",
  //       password: "",
  //     }

  //     obj.email = (login.value)
  //     obj.password = (password.value)
  //     userAPIFunctions.getUser(obj)
  //       .then((respone) => respone.json()
  //         .then((user) => sessionStorage(user))
  //       )
    // }
export default registration