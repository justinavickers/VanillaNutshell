import messageFetching from "./fetching"
import messageDiv from "./messageUserComponent"
import messageForm from "./messageForm"

let domEntry = document.querySelector(".domEntry")
function domMessage(parsedMessages) {
  parsedMessages.forEach(message => {
    let messageContents = messageDiv(message)
   domEntry.innerHTML += messageContents
  })
}


let messagesToDom = () => {
    domEntry.innerHTML=""
    // domEntry.innerHTML = messageForm()
    messageFetching.getFunction()
    .then(parsedMessages => domMessage(parsedMessages))
    .then(() => {
        domEntry.innerHTML += messageForm()
    })
}
export default messagesToDom
