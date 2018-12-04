function eventDiv(event) {
  console.log(event)
  let events =
  `<div id="eventDiv" class="eventDiv">
  <h1>${event.name}</h1>
  <p>Location: ${event.location}</p>
  <p>Date: ${event.date}</p>
  <p>Time: ${event.time}</p>
  <button id="delEv" class=${event.id}>Delete</button>
  </div>`
return events
}

export default eventDiv

{/* <button id="edEv" class=${event.id}>Edit</button> */}
// ${event.user_id === sessionStorage.user_id ? events: ""}