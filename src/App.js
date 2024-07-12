import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import DisplayContainer from './DisplayContainer/DisplayContainer';
import Weather from './Util/weather';
import { useState } from 'react';
import FiveDay from './FiveDay/FiveDay';


function App() {

  const [weather, setWeather] = useState('')
  const [fiveday, setFiveday] = useState('')

 
 const search = (term) =>{
    Weather.search(term).then(setWeather);   
 };

 const getForecast = (term) =>{
    Weather.getFiveday(term).then(setFiveday);
    console.log(fiveday)
 };
 
  
 
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
