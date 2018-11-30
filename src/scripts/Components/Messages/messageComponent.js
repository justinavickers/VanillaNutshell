function messageDiv(message){

    let messages=

    `
    <div id="messages" user_id=${message.user_id} class="message">
    <p>${message.message}</p><input type="button" value ="edit" />
    </div>
  `

  return messages
  }
  export default messageDiv