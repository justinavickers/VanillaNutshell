import articleFetching from "./fetching"
const aside = document.querySelector(".articlesContainer");

function renderArticles(parsedarticles) {
  articles.forEach(article => {
    aside.innerHTML += articleDisplay(article);
  });
  articleFetching.getFunction()
}

export default renderArticles