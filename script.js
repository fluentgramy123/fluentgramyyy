document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform any necessary validation or processing
  // For example, you can send the form data to a server using AJAX

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  // Display a success message or redirect to another page
  alert("Sign up successful!");
});

