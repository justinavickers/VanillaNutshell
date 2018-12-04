import eventAPIfunctions from "./fetching"
import eventsDom from "./displayEvents"

function deleteEvent(e) {
      eventAPIfunctions.deleteFunction(e)
      .then(() => {
          eventsDom()
       })
}

export default deleteEvent

// function deleteEvents(){
// eventAPIfunctions.getFunction().then(parsedEvent => parsedEvent.forEach(event =>{
//     if (event.id === document.querySelector(`".${event.id}"`)){
//         eventAPIfunctions.deleteFunction(`${event.id}`)
//     }
// }))
// }

// export default deleteEvents