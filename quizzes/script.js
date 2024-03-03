function addQuiz() {
  // Get the input values
  var quiz = document.getElementById('quiz').value;
  var file = document.getElementById('file').files[0];

  // Create a new list item element
  var newQuiz = document.createElement('li');

  // Add the input value to the new list item element
  newQuiz.textContent = quiz;

  // Check if a file is selected
  if (file) {
      // Create a link element for the file
      var fileLink = document.createElement('a');
      fileLink.href = URL.createObjectURL(file);
      fileLink.textContent = file.name;

      // Append the file link to the new list item element
      newQuiz.appendChild(fileLink);
  }

  // Add the new quiz to the quizzes section
  document.getElementById('quizzes-section').appendChild(newQuiz);

  // Clear the input fields
  document.getElementById('quiz').value = '';
  document.getElementById('file').value = '';
}