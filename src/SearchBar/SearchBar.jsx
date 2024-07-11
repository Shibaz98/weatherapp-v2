import userEvent from "@testing-library/user-event";
import './SearchBar.css'; 
import { useState } from "react";



function SearchBar(props){
    
    const [searchTerm, setSearchTerm] = useState(''); 

    const handleChange = (event) =>{
        setSearchTerm(event.target.value); 
    };

    return(
        <div className="SearchBarContainer">
            <input type="text" placeholder="Enter Location Here" onChange={handleChange}/>
            <button>Search!</button>
        </div>
    );
}; 

export default SearchBar; 