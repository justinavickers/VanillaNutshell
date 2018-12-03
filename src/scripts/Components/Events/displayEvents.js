import eventAPIfunctions from "./fetching"
import eventDiv from "./event"
import eventFormDiv from "./eventForm"

let domEntry = document.querySelector(".domEntry")
  function domEvents(parsedEvents) {
    parsedEvents.forEach(event => {
      let eventContents = eventDiv(event)
      domEntry.innerHTML += eventContents
  })
}

let eventsDom = () => {
  domEntry.innerHTML=""
  domEntry.innerHTML = eventFormDiv()
  eventAPIfunctions.getEvents().then(parsedEvents => domEvents(parsedEvents))
}

export default eventsDom