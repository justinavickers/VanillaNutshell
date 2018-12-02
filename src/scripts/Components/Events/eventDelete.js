import eventAPIfunctions from "./fetching"

function deleteEvents(){
eventAPIfunctions.getFunction().then(parsedEvent => parsedEvent.forEach(event =>{
    if (event.id === document.querySelector(`".${event.id}"`)){
        eventAPIfunctions.deleteFunction(`${event.id}`)
    }
}))
}

export default deleteEvents