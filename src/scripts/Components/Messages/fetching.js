const messageFetching={

getFunction(){
    return fetch("http://localhost:8088/messages")
    .then(messages => messages.json())
    .then(parsedMessages => parsedMessages)
},

deleteFunction(id){
  return fetch(`http://localhost:8088/messages/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
}
,

postFunction(entry){
        return fetch("http://localhost:8088/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(entry)

        }).then(post => post.json())
},

putFunction(value,id){
        return fetch(`http://localhost:8088/messages/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(value)
        }).then(res => res.json())
}
}

export default messageFetching
