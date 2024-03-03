document.getElementById("message-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value;
  // Send the message to the server or perform any other necessary actions
  console.log("Message submitted:", message);
  messageInput.value = "";
});
 