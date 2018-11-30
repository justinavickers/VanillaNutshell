import messageFetching from "./fetching"
import messageDiv from "./messageComponent"

let domEntry = document.querySelector(".domEntry")
function domMessage(parsedMessages) {
  parsedMessages.forEach(message => {
    let messageContents = messageDiv(message)
   domEntry.innerHTML += messageContents
  })
}


let messagesToDom = () => {
  domEntry.innerHTML=""
  messageFetching.getFunction().then(parsedMessages => domMessage(parsedMessages))
}
export default messagesToDom
