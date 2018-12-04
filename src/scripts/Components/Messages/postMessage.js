import messageFetching from "./fetching";
import messagesToDom from "./messageDisplay"
function postMessage (){

let message= {
    user_id: sessionStorage.user_id,
    message: document.querySelector(".message").value,
    email: sessionStorage.email
}
messageFetching.postFunction(message).then(()=>{
    messagesToDom()
})
}


export default postMessage