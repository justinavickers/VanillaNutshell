function eventDiv(event) {
  let events=
  `<div id="eventDiv" class="eventDiv">
  <h1>${event.name}</h1>
  <p>Location: ${event.location}</p>
  <p>Date: ${event.date}</p>
  <p>Time: ${event.time}</p>
  <button id="edEv" onClick="edit">Edit</button>
  <button id="delEv" onClick="remove">Delete</button>
  </div>`
return events
}

export default eventDiv