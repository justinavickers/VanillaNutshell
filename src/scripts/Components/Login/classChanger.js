const hideDiv = {

  // hideArticleDiv() {
  //   const articles = document.getElementById("articleBox");
  //   articles.classList.toggle("hide")
  // },

  // hideEventDiv() {
  //   const events = document.getElementById("eventBox");
  //   events.classList.toggle("hide")
  // },

  hideLoginDiv() {
    const login = document.getElementById("loginBox")
    login.classList.toggle("hide")
  },

  // hideMessageDiv() {
  //   const messages = document.getElementById("messages")
  //   messages.classList.toggle("hide")
  // },

  hideNavBarDiv() {
    const navBar = document.getElementById("navBar")
    navBar.classList.toggle("hide")
  },

  // hideTaskDiv() {
  //   const tasks = document.getElementById("taskBox")
  //   tasks.classList.toggle("hide")
  // },

  LogOut() {
    sessionStorage.clear()
    const login = document.getElementById("loginBox")
    login.classList.toggle("hide")
    const navBar = document.getElementById("navBar")
    navBar.classList.toggle("hide")
  }
}

export default hideDiv