import './DisplayContainer.css'; 

function DisplayContainer(props){

    if(!props.weather){
        console.log('API info missing')
    } else{
    
    const celsius = props.weather.main.temp - 273.15    // converts Kelvin to Celsius 
    


    return(
        <div className="DisplayContainer">
            <h1>{props.weather.name}</h1>
            <h1>{celsius.toFixed(1)}°c</h1>
        </div>
    )
    } 
};

export default DisplayContainer; 