import './DisplayContainer.css'; 

function DisplayContainer(props){

    if(!props.weather){
        console.log('API info missing')
    } else{
    
    const celsius = props.weather.main.temp - 273.15    // converts Kelvin to Celsius 
    
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

    console.log(weatherDescription)



    return(
        <div className="DisplayContainer">
            <h1>{props.weather.name}</h1>
            <h1>{weatherEmoji}</h1>
            <h2>{weatherDescription}</h2>
            <h1>{celsius.toFixed(1)}°c</h1>
        </div>
    )
    } 
};

export default DisplayContainer; 