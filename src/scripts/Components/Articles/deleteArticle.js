import articleFetching from "./fetching"
import articleContentDOM from "./articleDisplay"

function deleteArticle(obj){
        articleFetching.deleteFunction(obj)
        .then(() => {
            articleContentDOM()
        })
}

export default deleteArticle