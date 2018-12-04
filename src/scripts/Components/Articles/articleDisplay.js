import articleFetching from "./fetching"
import articleDisplay from "./articleUserComponent"
import articleFormDiv from "./articleForm"

let domEntry = document.querySelector(".domEntry")
function articleComponent(parsedArticles){
    parsedArticles.forEach(article => {
      let articleContent = articleDisplay(article)
      domEntry.innerHTML += articleContent
    })
 }

 let articleContentDOM = () => {
   domEntry.innerHTML=""
   domEntry.innerHTML = articleFormDiv()
   articleFetching.getFunction()
   .then(parsedArticles => articleComponent(parsedArticles))


 }
export default articleContentDOM