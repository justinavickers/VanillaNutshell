function articleDisplay(article) {
  console.log(article)
  let articles= `
  <div class = "articleName">
  <h3>${article.newsTitle}</h3>
  <h3>${article.synopsis}</h3>
  <h3>${article.articleURL}</h3>
  <h3>${article.date}</h3>
  <button id="delete" class=${article.id}>Delete</button>
  </div>
  `
  return articles
}

export default articleDisplay