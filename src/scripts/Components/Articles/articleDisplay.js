function articleDisplay(article) {
  let articles= `
  <h3>${article.newsTitle}</h3>
  <h3>${article.synopsis}</h3>
  <h3>${article.articleURL}</h3>
  `
  return articles
}

export default articleDisplay