import messageFetching from "./fetching"
import messagesToDom from "./messageDisplay"
function editMessage(value, id){
messageFetching.putFunction(value, id)
.then(() =>{ messagesToDom()})
}

export default editMessage