import postMessage from "./postMessage"
import deleteMessage from "./deleteMessage"
import editMessage from "./editMessage"
const messageFunctionality= {

    editButton(){
document.addEventListener("click",(e)=>{
    if(e.target && e.target.id=== "editButton"){
        let Id = e.target.className
        let value = document.querySelector(".message").value
        let messageValue={
            message: value
    }
        editMessage(messageValue, Id)
}
})
},
messageButton (){
document.addEventListener("click", function (e){
    if (e.target && e.target.id=== "messageButton"){
        postMessage()
}
})
},
deleteButton(){
document.addEventListener("click", function (e){
    if (e.target && e.target.id=== "deleteButton"){
        let messageIdNumber =e.target.className
        deleteMessage(messageIdNumber)}
})
}
}


export default messageFunctionality