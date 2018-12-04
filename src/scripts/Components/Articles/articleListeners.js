import deleteArticle from "./deleteArticle"
import postToAPI from "./postArticle"
const articleListening = {
  submitArticle() {
    document.addEventListener("click", (obj) => {
      if (obj.target && obj.target.id === "submitArticle") {
        console.log(document.querySelector("#articleTitle").value)
        console.log(document.querySelector("#synopsis").value)
        console.log(document.querySelector("#articleURL").value)
        console.log(document.querySelector("#articleDate").value)

        postToAPI()
        console.log("submit")}
    })
  },
  deleteButton() {
    document.addEventListener("click", function (obj) {
      if (obj.target && obj.target.id=== "delete")
      {
      let articleIdNumber =obj.target.className
      deleteArticle(articleIdNumber)}

    })
  }
}

export default articleListening