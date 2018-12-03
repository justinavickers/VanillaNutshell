function messageDiv(message){

  let editButtons = `<input type='button' value ='edit'id='editButton' class=${message.id} /><input type='button' value='delete' class=${message.id} id='deleteButton' />`
  let messages=
    `
    <div id="messages" class="emptyContainer">
    <p>${message.email}</p>
    <p>${message.message}</p>
    ${message.user_id === sessionStorage.user_id ? editButtons : ""}
    </div>
  `
  return messages
  }
  export default messageDiv