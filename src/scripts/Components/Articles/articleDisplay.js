
const articleDisplay = (article) => {
  return `
  <h3>${article.newsTitle}</h3>
  <h3>${article.synopsis}</h3>
  <h3>${article.articleURL}</h3>
  `
}

export default articleDisplay