import deleteArticle from "./deleteArticle"
const articleListening = {
  // submitArticle() {
  //   document.addEventListener("click", (obj) => {
  //     if (obj.target && obj.target.id === "subObj") {console.log("submit")}
  //   })
  // },
  deleteButton() {
    document.addEventListener("click", function (obj) {
      if (obj.target && obj.target.id=== "delete")
      {console.log("delete")} {
      let articleIdNumber =obj.target.className
      deleteArticle(articleIdNumber)}
      // {console.log("delete")}
    })
  }
}

export default articleListening