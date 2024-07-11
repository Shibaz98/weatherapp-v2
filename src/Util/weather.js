// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}


const key = '4ea62206457808993127bcd02b7f17cd'; 


const Weather = {
    async search(term){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${key}`).then(response =>{
            if(response.ok){
                return response.json();
            } else{
                console.log('error');
            }
        }).then(jsonRepsonse => jsonRepsonse)
    }
}

export default Weather; 