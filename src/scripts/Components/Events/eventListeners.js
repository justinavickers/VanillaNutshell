const eventListening = {
  submitEvent() {
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "subEv") {console.log("submit to me")}
    })
  },
  editEvent() {
    document.addEventListener("click",(e) => {
      if (e.target && e.target.id === "edEv") {console.log("edit me i'm flawed")}
    })
  },
  deleteEvent() {
    document.addEventListener("click", function (e) {
      if (e.target && e.target.id=== "delEv") {console.log("delete me silly")}
    })
  }
}

export default eventListening