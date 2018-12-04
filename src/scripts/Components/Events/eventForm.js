function eventFormDiv() {
  let eventForm =
  `<div id="eventBox" class="eventBox">
  <input type="text" id="eventName" class="eventName" placeholder="Name of event"/>
  <br>
  <input type="text" id="eventLocation" class="eventLocation" placeholder="Location"/>
  <br>
  <input type="date" id="eventDate" class="eventDate" placeholder="Date"/>
  <br>
  <input type="time" id="eventTime" class="eventTime" placeholder="Time"/>
  <br>
  <input type="button" id="submitEvent" class="submitEvent" value="Submit"/>
  </div>`
  console.log("why is this duplicating")
  return eventForm
}

export default eventFormDiv