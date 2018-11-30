const articleAPIfunctions={
  // pulling users from the JSON database to the main js
  getArticles(){
      fetch("http://localhost:8088/articles")
      .then(article => article.json())
      .then(parsedarticles => parsedarticles)
  },
  // to post new users to the JSON database
  postArticles(article){
    console.log("post running", article)
      return fetch("http://localhost:8088/articles",{
      method:"POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(article)
  })}
}
export default articleAPIfunctions