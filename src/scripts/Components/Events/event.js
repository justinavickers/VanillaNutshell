function eventDiv(event) {
  let events=
  `<div id="eventDiv" class="eventDiv">
  <h1>${event.name}</h1>
  <p>Location: ${event.location}</p>
  <p>Date: ${event.date}</p>
  <p>Time: ${event.time}</p>
  </div>`
return events
}

export default eventDiv