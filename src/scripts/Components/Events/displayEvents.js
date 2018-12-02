import eventAPIfunctions from "./fetching"
import eventDiv from "./event"

let domEntry = document.querySelector(".domEntry")
function domEvents(parsedEvents) {
  parsedEvents.forEach(event => {
    let eventContents = eventDiv(event)
   domEntry.innerHTML += eventContents
  })
}

let eventsDom = () => {
  domEntry.innerHTML=""
  eventAPIfunctions.getEvents().then(parsedEvents => domEvents(parsedEvents))
}

export default eventsDom