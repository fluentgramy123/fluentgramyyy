function addAnnouncement() {
  // Get the input value
  var announcement = document.getElementById('announcement').value;

  // Create a new list item element
  var newAnnouncement = document.createElement('li');

  // Add the input value to the new list item element
  newAnnouncement.textContent = announcement;

  // Add the new announcement to the announcement section
  document.getElementById('announcement-section').appendChild(newAnnouncement);

  // Clear the input field
  document.getElementById('announcement').value = '';
}

function addEvent() {
  // Get the input values
  var eventDate = document.getElementById('event-date').value;
  var event = document.getElementById('event').value;

  // Create a new list item element
  var newEvent = document.createElement('li');

  // Add the input values to the new list item element
  newEvent.textContent = eventDate + ': ' + event;

  // Add the new event to the event section
  document.getElementById('event-section').appendChild(newEvent);

  // Clear the input fields
  document.getElementById('event-date').value = '';
  document.getElementById('event').value = '';
}