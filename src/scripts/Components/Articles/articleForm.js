function articleFormDiv(){
  let articleForm = `
  <div id="articleForm>
  <h1>New Article</h1>
  <input type="text" id="articleName" class="articleName" value="New article">
  <input type="date" id="articleDate" class="articleDate" value="Date">
  <input type"checkbox" id="articleCompleted">
  <input type="button" id="submitarticle" class="submitarticle"
  <input type="button" id="deletearticle" class="deletearticle" color="red">
  </div>
  `
  return articleForm
}
export default articleFormDiv