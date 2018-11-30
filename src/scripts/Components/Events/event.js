function eventDiv(event) {
  let events=
  `<div id="eventDiv" class="eventDiv">
  <h1>${event.name}</h1>
  <p>${event.location}</p>
  <p>${event.date}</p>
  <p>${event.time}</p>
  </div>`
return events
}

export default eventDiv