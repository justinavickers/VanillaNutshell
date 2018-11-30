const eventAPIfunctions = {
  getEvents() {
    return fetch("http://localhost:8088/events")
    .then(events => events.json() )
    .then(parsedEvents => parsedEvents)
  },
  postEvent(event){
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    })
  },
  patchEvent(event) {
      return fetch("http://localhost:8088/events", {
      method:"PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    }
  )}
}

export default eventAPIfunctions
