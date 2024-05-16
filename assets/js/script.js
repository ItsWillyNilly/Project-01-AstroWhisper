//this JS file will contain all the code for the index.html file
const submitButton = document.querySelector('#revealButton');
const usernameInput = document.querySelector('#userName');
const birthdayInput = document.querySelector('#birthdayDate');

//function to take user input and store it in local storage
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    let birthday = JSON.parse(localStorage.getItem('birthday')); 

    // create user object when the user clicks on the submit button
      const user = {
        username: usernameInput.value.trim(),
        birthday: birthdayInput.value.trim(),
      };

      // stores the input into local storage
      localStorage.setItem('birthday', JSON.stringify(user));
  
      window.location="card.html";
});

/*Add functionality for the trigger button */
document.addEventListener('DOMContentLoaded', function() {
  var triggerButtons = document.querySelectorAll('.js-modal-trigger');
  triggerButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var target = button.getAttribute('data-target');
      var modal = document.getElementById(target);
      if (modal) {
        modal.classList.remove('hidden'); // Remove the "hidden" class to show the modal
        modal.classList.add('is-active');
      }
    });
  });
  // Close modal when close button is clicked
  var closeButtons = document.querySelectorAll('.delete, .modal-background, .modal-card-foot .button');
  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var modal = button.closest('.modal');
      if (modal) {
        modal.classList.remove('is-active');
        modal.classList.add('hidden'); // Add the "hidden" class to hide the modal
      }
    });
  });
});
