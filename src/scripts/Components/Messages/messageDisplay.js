import messageFetching from "./fetching"
import messageDiv from "./messageComponent"

let domEntry = document.querySelector(".domEntry")
function domMessage(parsedMessages) {
  parsedMessages.forEach(message => {
    let messageContents = messageDiv(message)
    domEntry.innerHTML += messageContents
  })
}

function clearDom(){
  domEntry.innerHTML=""
}
let messageToDom = () => {
  clearDom()
  messageFetching.getFunction().then(parsedMessages => domMessage(parsedMessages))
}
export default messageToDom