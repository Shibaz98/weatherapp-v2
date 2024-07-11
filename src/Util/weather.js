// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}


const key = ''; 

const Weather = {
    async search(term){
        return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${term}&appid=${key}`).then(response =>{
            if(response.ok){
                return response.json();
            } else{
                console.log('error');
            }
        }).then(jsonRepsonse => jsonRepsonse)
    }
}

export default Weather; 