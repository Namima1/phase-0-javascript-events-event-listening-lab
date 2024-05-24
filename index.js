function addingEventListener() {
  const button = document.getElementById('button');
  
  if (button) {
    button.addEventListener('click', function() {
      alert('Button was clicked!');
    });
  } else {
    console.error('Button with id "button" not found.');
  }
}

// Ensure the function is called after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
addingEventListener();
});
