import messageFetching from "./fetching"
import messageDisplay from "./messageDisplay"



function messageComponent(){
    const domEntry = document.querySelector(".domEntry")
    messageFetching.getFunction()
    .then(parsedMessage =>parsedMessage.foreach(message => {
    messageDisplayed = messageDisplay.messageDisplay(message)
    }))

domEntry.innerHTML += messageDisplayed
}


export default messageComponent