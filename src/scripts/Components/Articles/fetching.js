const articleFetching = {

  getFunction:() => {
      return fetch("http://localhost:8088/articles")
      .then(article => article.json())
      .then(parsedArticles => parsedArticles)
  },

  postFunction(article){
          return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(article)

          }).then(post => post.json(article))
  },

  putFunction(article,id){
          return fetch(`http://localhost:8088/articles/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
          }).then(res => res.json())
          .then(console.log(article))

  },

  deleteFunction(id){
    return fetch(`http://localhost:8088/articles/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
  }
  }

  export default articleFetching