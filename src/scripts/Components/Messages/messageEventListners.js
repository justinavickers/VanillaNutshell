import postMessage from "./postMessage"
import deleteMessage from "./deleteMessage"
const messageFunctionality= {
editButton(){
document.addEventListener("click",(e)=>{
    if(e.target && e.target.id=== "editButton"){console.log("hello editButton")}}
)
},
messageButton (){
document.addEventListener("click", function (e){
    if (e.target && e.target.id=== "messageButton"){
        postMessage()
        console.log("hello messageButton")}
})
},
deleteButton(){
document.addEventListener("click", function (e){
    if (e.target && e.target.id=== "deleteButton"){
        let messageIdNumber =e.target.className
        console.log(messageIdNumber)
        deleteMessage(messageIdNumber)
        console.log("hello deleteButton")}
})
}
}


export default messageFunctionality