import messageFetching from "./fetching"
function deleteMessages(){
messageFetching.getFunction().then(parsedMessage => parsedMessage.forEach(message =>{
    if (message.id === document.querySelector(`".${message.id}"`)){
        messageFetching.deleteFunction(`${message.id}`)
    }
}))
}

export default deleteMessages