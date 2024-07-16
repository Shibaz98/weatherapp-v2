import './Forecast.css'; 

function Forecast(props){

    console.log(props.weather)

    const celsius = props.weather.main.temp - 273.15; 

    console.log(celsius)

    return(
        <div className="forecastContainer">
            <h1>{celsius.toFixed(1)}</h1>
            <h1>test</h1>
        </div>
    )
};

export default Forecast; 