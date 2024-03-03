function addComment() {
  // Get the input value
  var comment = document.getElementById('comment').value;

  // Create a new paragraph element
  var newComment = document.createElement('p');

  // Add the input value to the new paragraph element
  newComment.textContent = comment;

  // Add the new comment to the comments section
  document.getElementById('comments-section').appendChild(newComment);

  // Clear the input field
  document.getElementById('comment').value = '';
}