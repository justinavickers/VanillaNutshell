import deleteEvent from "./eventDelete"
import submitEvent from "./eventSubmit"
import editEvent from "./eventEdit";

const eventListening = {
  submitButton() {
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "subEv") {
        console.log("submit to me")
        submitEvent()
      }
    })
  },
  editButton() {
    console.log("bruh click")
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "edEv") {
        let id = e.target.className
        let user_id = sessionStorage.user_id
        let name = document.querySelector("#eventName").value
        let location = document.querySelector("#eventLocation").value
        let date = document.querySelector("#eventDate").value
        let time = document.querySelector("#eventTime").value
        console.log("edit me i'm flawed")
        let event = {
          name: name,
          location: location,
          date: date,
          date: time,
          user_id: user_id
        }
        console.log("yo u here")
        editEvent(event, id)
      }
    })
  },
  deleteButton() {
    document.addEventListener("click", function (e) {
      if (e.target && e.target.id === "delEv") {
        let eventIdNumber = e.target.className
        deleteEvent(eventIdNumber)
      }
    })
  }
}
export default eventListening