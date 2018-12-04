import eventAPIfunctions from "./fetching"
import eventsDom from "./displayEvents";

function submitEvent() {
  let user_idValue = sessionStorage.user_id
  let nameValue = document.querySelector("#eventName").value
  let locationValue = document.querySelector("#eventLocation").value
  let dateValue = document.querySelector("#eventDate").value
  let timeValue = document.querySelector("#eventTime").value

  let events = {
    user_id: user_idValue,
    name: nameValue,
    location: locationValue,
    date: dateValue,
    time: timeValue
  }
eventAPIfunctions.postEvent(events)
.then(() =>
  eventsDom())
}

export default submitEvent