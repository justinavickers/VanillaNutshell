const articleFetching={

  getFunction:() => {
      fetch("http://localhost:8088/articles")
      .then(article => article.json())
      .then(parsedarticles => parsedarticles)
  },

  postFunction(article){
          return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(article)

          }).then(post => post.json())
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

  }
  }

  export default articleFetching
