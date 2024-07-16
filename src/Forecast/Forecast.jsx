import './Forecast.css'; 

function Forecast(props){

    console.log(props.weather)

    const celsius = props.weather.main.temp - 273.15; 

    console.log(celsius)

    const weatherString = props.weather.dt_txt.substr(0,10); // this extracts the date from the returned api by using subtr method to choose relevant characters
    const dayObject = new Date(weatherString) // this converts weatherString into a date object
    const dayString = dayObject.toDateString(); // this converts the date object into a readable string 


    function getWeatherEmoji(weatherId){
        switch(true){
            case (weatherId >= 200 && weatherId < 300):
                return "⛈️";
            case (weatherId >= 300 && weatherId < 400):
                return "🌧️";    
            case (weatherId >= 500 && weatherId < 600):
                return "⛈️";
            case (weatherId >= 600 && weatherId < 700):
                return "❄️";
            case (weatherId >= 700 && weatherId < 800):
                return "😶‍🌫️";    
            case (weatherId === 800):
                return "🌞";
            case (weatherId >= 801 && weatherId < 810):
                return "☁";
            default:
                return "???";                 
        }
    }; 
    
    const weatherEmoji = getWeatherEmoji(props.weather.weather[0].id)
    const weatherDescription = props.weather.weather[0].description


    return(
        <div className="forecastContainer">
            <h1>{dayString}</h1>
            <h1>{weatherEmoji}</h1>
            <h2>{weatherDescription}</h2>
            <h1>{celsius.toFixed(1)}</h1>
        </div>
    )
};

export default Forecast; 