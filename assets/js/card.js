const isBetween = window.dayjs_plugin_isBetween;
dayjs.extend(isBetween);
// this file will contain the JS for card.html
const user = JSON.parse(localStorage.getItem('birthday'));
const signs = JSON.parse(localStorage.getItem('zodiacsign'));

console.log(signs);
// Log the signs to the console for debugging purposes
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b3f4ad0488msh25707697dd3120ap175263jsnbbef9125d64d',
        'X-RapidAPI-Host': 'zodiac-sign-api1.p.rapidapi.com'
    }
};
// Define an object to store the zodiac signs and their corresponding date ranges
const zodiacSigns = {
    'Aquarius': [dayjs('2024-01-20'), dayjs('2024-02-18')],
    'Pisces': [dayjs('2024-02-19'), dayjs('2024-03-20')],
    'Aries': [dayjs('2024-03-21'), dayjs('2024-04-19')],
    'Taurus': [dayjs('2024-04-20'), dayjs('2024-05-20')],
    'Gemini': [dayjs('2024-05-21'), dayjs('2024-06-20')],
    'Cancer': [dayjs('2024-06-21'), dayjs('2024-07-22')],
    'Leo': [dayjs('2024-07-23'), dayjs('2024-08-22')],
    'Virgo': [dayjs('2024-08-23'), dayjs('2024-09-22')],
    'Libra': [dayjs('2024-09-23'), dayjs('2024-10-22')],
    'Scorpio': [dayjs('2024-10-23'), dayjs('2024-11-21')],
    'Sagittarius': [dayjs('2024-11-22'), dayjs('2024-12-21')],
    'Capricorn': [dayjs('2024-12-22'), dayjs('2025-01-19')]
};
// Async function to get the user's zodiac sign based on their birthdate
async function getZodiacSign() {
    const signs = JSON.parse(localStorage.getItem('zodiacsign'));
    for (const sign in zodiacSigns) {
        const [startDate, endDate] = zodiacSigns[sign];

        if (dayjs(dayjs(user.birthday)).isBetween(startDate, endDate, 'day', '[]')) {
            console.log('sign', sign);
            console.log('signs', signs[sign]);
            localStorage.setItem('sign', sign);
            localStorage.setItem('horoscope', signs[sign].personality);
        }
    }
}
// Function to create a card element with the user's information
function createCard() {

    console.log("hi");
    const userSign = localStorage.getItem("sign");
    const userFortune = localStorage.getItem("Fortune");
    const userHoroscope = localStorage.getItem("horoscope");
    const userData = JSON.parse(localStorage.getItem('birthday'));

    console.log(userData);
    if (userData) {
        console.log("hello", userData);
        const cardHTML = `
        <div class="card">
          <div><h2>Hi,${userData.username}! Your sign is:</h2>
          <h3>${userSign}</h3>
          </div>
          <img src="./assets/images/zodiacs/${userSign}_img.jpg" alt="User Image" class="card-image"/>        
          <div><h3>Horoscope:</h3>
          <p>${userHoroscope}</p>
          </div>
          <div><h3>Fortune:</h3>
          <p>${userFortune}</p>
          </div>
        </div>
      `;

        const fortuneElement = document.querySelector(".fortune-card");

        console.log(cardHTML);

        fortuneElement.innerHTML = cardHTML;
    }
}

// Async function to generate a fortune using the Fortune Cookie API
async function generateFortune() {

    const url = 'https://fortunecookie.p.rapidapi.com/api/v1/fortune';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39d4e0a90dmsh7b651e8c7a3c32cp19dfa1jsn25d4bc166674',
            'X-RapidAPI-Host': 'fortunecookie.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const fortune = JSON.parse(result);

        console.log(JSON.parse(result));
        localStorage.setItem("Fortune", fortune.message);

    } catch (error) {
        console.error(error);
    }


}
// Call the functions to generate the fortune 
generateFortune();
//call the function to get the user's zodiac sign
getZodiacSign();
//call the function to create the card with user's zodiac sign and fortune
createCard();
