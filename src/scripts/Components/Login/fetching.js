const userAPIFunctions = {
  //getting users from database to main.js
  getUsers() {
    return fetch("http://localhost:8088/users")
      .then(users => users.json())
      .then(parsedUsers => console.log(parsedUsers))

  },
  postUser(obj) {
    console.log("postrunning", obj)
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