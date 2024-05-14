const isBetween = window.dayjs_plugin_isBetween;
dayjs.extend(isBetween);
// this file will contain the JS for card.html
const user = JSON.parse(localStorage.getItem('birthday'));
const signs = JSON.parse(localStorage.getItem('zodiacSign'));

console.log(signs);

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b3f4ad0488msh25707697dd3120ap175263jsnbbef9125d64d',
        'X-RapidAPI-Host': 'zodiac-sign-api1.p.rapidapi.com'
    }
};

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

async function getZodiacSign() {
    for (const sign in zodiacSigns) {
        const [startDate, endDate] = zodiacSigns[sign];
        if (dayjs(dayjs(user.birthday)).isBetween(startDate, endDate, 'day', '[]')) {
            console.log('sign', sign);
        }
    }
    return null;
}

// Example usage:
getZodiacSign();

// function to create the card and display the data
function createCard(data) {

    let horoscope = `<div class="card">
            <h2>${data.userName} your Zodiac sign is...</h2>
            <h2>${determineZodiac()}</h2> 

            <h2>Fortune<h2>
            
            <p>${generateFortune()}</p>        
    </div>`

    const element = document.createElement('div');
    element.innerHTML = horoscope;

    document.body.appendChild(element.firstChild);
}

// function to generate a fortune using a fortune API
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
	console.log(result);
} catch (error) {
	console.error(error);
}

    // const options = {
    //     method: 'GET',
    //     url: 'https://fortunecookie.p.rapidapi.com/api/v1/fortune',
    //     headers: {
    //       'X-RapidAPI-Key': '39d4e0a90dmsh7b651e8c7a3c32cp19dfa1jsn25d4bc166674',
    //       'X-RapidAPI-Host': 'fortunecookie.p.rapidapi.com'
    //     }
    //   };
     
    //   try {
        // fetch ('https://fortunecookie.p.rapidapi.com/api/v1/fortune')
        //   const response = fetch(url,options);
        //   const data = response.json();
        // .then (res => res.json())
        // .then (data => {
          
        //   console.log(data);
          
        //   return data.fortune.message;

        //  }) catch (error) {
        //   console.error(error);
    //   });

    }

    generateFortune();
