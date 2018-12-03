function articleFormDiv(){
  let articleForm = `
  <div id="articleForm>
  <h1>New Article</h1>
  <input type="text" id="articleName" class="articleName" value="New article">
  <input type="date" id="articleDate" class="articleDate" value="Date">
  <input type"checkbox" id="articleCompleted">
  <input type="button" id="submitArticle" value="submit" class="submitarticle"
  <input type="button" id="deleteArticle" value="delete" class="deletearticle" color="red">
  </div>
  `
  return articleForm
}
export default articleFormDiv