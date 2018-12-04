const eventAPIfunctions = {

  getEvents() {
    return fetch("http://localhost:8088/events")
    .then(events => events.json() )
    .then(parsedEvents => parsedEvents)
  },

  postEvent(events) {
    console.log("what are you", events)
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(events)
    })
  },

  patchEvent(event, id) {
      return fetch(`http://localhost:8088/events/${id}`, {
      method:"PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    })
    .then(r => r.json() )
    .then(r => console.log(r))
  },

  deleteFunction(id) {
    return fetch(`http://localhost:8088/events/${id}`, {
      method: "DELETE"
    })
    .then(deleting => deleting.json() )
  }
}

export default eventAPIfunctions
