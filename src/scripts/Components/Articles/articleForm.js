function articleFormDiv(){
  let articleForm = `
  <div id="articleForm">
  <h1>New Article</h1>
  <input type="text" id="articleTitle" class="articleTitle" placeHolder="Article Title" value="" />
  <input type="text" id="synopsis" class="synopsis" placeHolder="Synopsis" value="" />
  <input type="text" id="articleURL" class="articleURL" placeHolder="ArticleURL" value="" />
  <input type="date" id="articleDate" class="articleDate" value="Date" />
  <input type="button" id="submitArticle" value="Add" class="submitarticle" />
  </div>
  `
  return articleForm
}
export default articleFormDiv