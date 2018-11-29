const userAPIFunctions = {
  //getting users from database to main.js
  getUsers() {
    return fetch("http://localhost:8088/users")
      .then(users => users.json())
      .then(parsedUsers => parsedUsers)
  },
  // // fetch to validate email
  // getUser(email) {
  //   return fetch(`http://localhost:8088/users?email=${email}`)
  //     .then(user => user.json())
  //     .then(parsedUser => parsedUser[0])
  // },
  // fetch to piss new users into database
  postUser(obj) {
    console.log("postrunning",obj)
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
  }
}
export default userAPIFunctions