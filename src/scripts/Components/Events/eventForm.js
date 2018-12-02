function eventFormDiv() {
  let eventForm =
  `<div id="eventBox" class="eventBox hide">
  <input type="text" id="eventName" class="eventName" placeholder="Name of event" />
  <input type="text" id="eventLocation" class="eventLocation" placeholder="Location" />
  <input type="date" id="eventDate" class="eventDate" placeholder="Date" />
  <input type="time" id="eventTime" class="eventTime" placeholder="Time" />
  <input type="button" id="submitEvent" class="submitEvent" value="Submit" />
  <input type="button" id="editEvent" class="editEvent" value="Edit" />
  <input type="button" id="deleteEvent" class="deteEvent" value="Delete" />
  </div>`

  return eventForm
}

export default eventFormDiv