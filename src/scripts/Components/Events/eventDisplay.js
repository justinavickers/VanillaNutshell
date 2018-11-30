import eventAPIfunctions from "./fetching"

function eventDisplay(){
    const domEntry = document.querySelector(".domEntry")
    eventAPIfunctions.getFunction()
    .then(parsedEvents =>parsedEvents.foreach(events => {
    eventDisplayed = eventDisplay.eventDisplay(events)
    }))

domEntry.innerHTML += eventDisplayed
}

export default eventDisplay