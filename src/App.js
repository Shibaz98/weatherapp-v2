import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import DisplayContainer from './DisplayContainer/DisplayContainer';
import Weather from './Util/weather';
import { useState } from 'react';

function App() {

  const [weather, setWeather] = useState('')

 
 const search = (term) =>{
    console.log(term);
    Weather.search(term).then(setWeather);  
    console.log(weather); 
 };
 
 
 
  return (
    <div className="App">
      <h1>Weather App with React!</h1>
      <SearchBar search={search}/>
      <div className='DisplaySection'>
        <DisplayContainer weather={weather}/>
      </div>
    </div>
  );
}

export default App;
