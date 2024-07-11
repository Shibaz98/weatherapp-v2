import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';

function App() {
 
 const search = (term) =>{
  console.log(term); 
 }; // to add api functionality here later, for now it just logs the search term once I click search 
 
 

 
 
 
  return (
    <div className="App">
      <h1>Weather App with React!</h1>
      <SearchBar search={search}/>
    </div>
  );
}

export default App;
