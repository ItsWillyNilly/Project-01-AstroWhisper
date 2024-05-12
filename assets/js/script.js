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

function getZodiacSign() {
  const url = 'https://zodiac-sign-api1.p.rapidapi.com/all';
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3f4ad0488msh25707697dd3120ap175263jsnbbef9125d64d',
		'X-RapidAPI-Host': 'zodiac-sign-api1.p.rapidapi.com'
	}
};

  fetch(url, options)
  .then(response=>response.json())
    .then(data=>{
      console.log(data);
      
    }) 
    .catch(err=>console.log(err))
}

getZodiacSign();
