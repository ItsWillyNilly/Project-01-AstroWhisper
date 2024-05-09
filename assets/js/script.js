//this JS file will contain all the code for the index.html file
const submitButton = document.querySelector('#submit');
const usernameInput = document.querySelector('#username');
const birthdayInput = document.querySelector('#date');

//function to take user input and store it in local storage
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    let birthday = JSON.parse(localStorage.getItem('birthday')); 

    // create user object when the user clicks on the submit button
      user = {
        username: usernameInput.value.trim(),
        birthday: birthdayInput.value.trim(),
      };

      // stores the input into local storage
      localStorage.setItem('birthday', JSON.stringify(birthday));
  
      window.location="card.html";
});