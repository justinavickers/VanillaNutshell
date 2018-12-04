function eventFormDiv() {
  let eventForm =
  `<div id="eventBox" class="eventBox">
  <input type="text" id="eventName" class="eventName" placeholder="Name of event" value=""/>
  <br></br>
  <input type="text" id="eventLocation" class="eventLocation" placeholder="Location" value="" />
  <br></br>
  <input type="date" id="eventDate" class="eventDate" placeholder="Date" value="" />
  <br></br>
  <input type="time" id="eventTime" class="eventTime" placeholder="Time" value="" />
  </br></br>
  <button id="subEv" class="submitEv">Submit</button>
  </div>`
  return eventForm
}

export default eventFormDiv