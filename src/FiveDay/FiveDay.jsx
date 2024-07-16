import './FiveDay.css'; 
import Forecast from '../Forecast/Forecast';

function FiveDay(props){

    if(!props.forecast){
        console.log('forecast not set')
    } else 

    return(
        <div className='test'> 
            <h1>Five day forecast</h1>   
        <div className='FiveDayContainer'>
            {props.forecast.map((weather, index) => (
                <Forecast key={index} weather={weather}/>
            ))}
            
        </div>
        </div>
    )
};

export default FiveDay