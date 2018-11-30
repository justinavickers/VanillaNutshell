import articleFetching from "./fetching"
import articleDisplay from "./articleDisplay"

let domEntry = document.querySelector(".domEntry")
function articleComponent(parsedArticles){
    parsedArticles.forEach(article => {
      let articleContent = articleDisplay(article)
      domEntry.innerHTML += articleContent
    })
 }

 let articleContentDOM = () => {
   domEntry.innerHTML=""
   articleFetching.getFunction()
   .then(parsedArticles => articleComponent(parsedArticles))
 }
export default articleContentDOM