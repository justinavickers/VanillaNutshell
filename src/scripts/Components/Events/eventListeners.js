import eventDiv from "./displayEvents"
import eventDelete from "./eventDelete"

const eventListening = {
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