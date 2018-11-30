const messageFetching={

getFunction(){
    return fetch("http://localhost:8088/messages")
    .then(messages => messages.json())
    .then(parsedMessages => parsedMessages)
},

deleteFunction(){

},

postFunction(){
        return fetch("http://localhost:8088/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify()

        }).then(post => post.json())
},

putFunction(entry,id){
        return fetch(`http://localhost:8088/messages/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(entry)
        }).then(res => res.json())
        .then(console.log(entry))

}
}

export default messageFetching
