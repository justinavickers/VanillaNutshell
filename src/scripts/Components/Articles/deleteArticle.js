import articleFetching from "./fetching"
function deleteArticles(){
articleFetching.getFunction().then(parsedMessage => parsedMessage.forEach(article =>{
    if (article.id === document.querySelector(`".${article.id}"`)){
        articleFetching.deleteFunction(`${article.id}`)
    }
}))
}

export default deleteArticles