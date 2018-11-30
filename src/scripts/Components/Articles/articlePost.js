import articleAPIfunctions from "./fetching"
function newArticlePost(){
    let news_title = document.querySelector("#news_title")
    let synopsis = document.querySelector("#synopsis")
    let url = document.querySelector("#url")

    let article ={
      news_title: "",
      synopsis: "",
      url: "",
      userId: ""
    }

    article.news_title = news_title.value
    article.synopsis = synopsis.value
    article.url = url.value
    article.userId = sessionStorage.getItem("user_id")
    articleAPIfunctions.postArticles(article)

}

export default newArticlePost

import articleFetching from "./fetching"
import articleDisplay from "./articleDisplay"



function articleComponent(){
    const domEntry = document.querySelector(".domEntry")
    articleFetching.getFunction()
    .then(parsedarticle =>parsedarticle.foreach(article => {
    articleDisplayed = articleDisplay.articleDisplay(article)
    }))

domEntry.innerHTML += articleDisplayed
}


export default articleComponent












function getArticles() {
  articleFetching.getArtiEntries()
    .then(entries => renderArticleEntries(entries))
}
getArticles()

export default getArticles