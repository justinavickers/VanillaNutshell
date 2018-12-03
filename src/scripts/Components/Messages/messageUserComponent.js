function messageDiv(message){

  let editButtons = "<input type='button' value ='edit'id='editButton' /><input type='button' value='delete' id='deleteButton' />"
  let messages=
    `
    <div id="messages" class="emptyContainer ${message.id}">
    <p>${message.email}</p>
    <p>${message.message}</p>
    ${message.user_id === sessionStorage.user_id ? editButtons : ""}
    </div>
  `
  return messages
  }
  export default messageDiv