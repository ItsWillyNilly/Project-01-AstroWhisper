// this file will contain the JS for card.html
const userBirthday = localStorage.getItem('birthday');
const name = localStorage.getItem('userName');

// function to create the card and display the data
function createCard(data) {

    let horoscope = `<div class="card">
            <h2>${data.username} your Zodiac sign is...</h2>
            <h2>${determineZodiac()}</h2> 

            <h2>Fortune<h2>
            <p>${generateFortune()}</p>        
    </div>`
    
    const element = document.createElement('div');
    element.innerHTML = horoscope;
    
    document.body.appendChild(element.firstChild);
}

// function to get user data from local storage and find out what their Zodiac sign is using the Astrology API
function determineZodiac {
// display the name of the Zodiac and the symbol

}

//function to generate a fortune using a fortune API
function generateFortune{

}