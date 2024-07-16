import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import DisplayContainer from './DisplayContainer/DisplayContainer';
import Weather from './Util/weather';
import { useState, useEffect } from 'react';
import FiveDay from './FiveDay/FiveDay';


function App() {

  const [weather, setWeather] = useState('')
  const [fiveday, setFiveday] = useState([])
  const [test, setTest] = useState([]); 
  const [forecast, setForecast] = useState([]); 

 
 const search = (term) =>{
    Weather.search(term).then(setWeather);   
 };

 const getForecast = (term) =>{
    Weather.getFiveday(term).then(setFiveday);
    setForecast(fiveday.filter((object) => object.dt_txt.includes('12:00'))); // The api (fiveday) returns an array of 40 objects, this function allows me to filter through them all and ONLY return the ones that includes the time stamp 12:00pm
 };

console.log(Array.isArray(fiveday))  // this is deffo an array lol 
console.log(fiveday); 

console.log(forecast[3].main.temp)


  








 
  
 
  return (
    <div className="App">
      <h1>Weather App with React!</h1>
      <SearchBar search={search} getForecast={getForecast}/>
      <div className='DisplaySection'>
        <DisplayContainer weather={weather}/>
      </div>
      <div className='FiveDaySection'>
        <FiveDay/>
      </div>
    </div>
  );
}

export default App;
