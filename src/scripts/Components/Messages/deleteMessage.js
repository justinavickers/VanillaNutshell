import messageFetching from "./fetching"
import messagesToDom from "./messageDisplay"
function deleteMessages(e){
    console.log(e)
        messageFetching.deleteFunction(e).then(
            messagesToDom
        )

}

export default deleteMessages