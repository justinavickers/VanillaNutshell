function eventCreation(events) {
  let events =
  `<div id="messages" class="messages hide">
        <div class="emptyMessageContainer"></div>
        <input type="text" id="message" class="message" placeholder="Message">
        <input type="button" id="messageButton" class="messageButton" value="Send">
  </div>
  <aside class="messagesContainer"></aside>`
  return events
}

export default eventCreation