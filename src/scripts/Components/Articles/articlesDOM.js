import articleFetching from "./fetching"
import articleDisplay from "./articleDisplay"
const aside = document.querySelector(".articlesContainer");

function renderArticles(articles) {
  articles.forEach(article => {
    aside.innerHTML += articleDisplay(article);
  });
  articleFetching.getFunction()
}

export default renderArticles