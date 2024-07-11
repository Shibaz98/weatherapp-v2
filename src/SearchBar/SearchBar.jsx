import userEvent from "@testing-library/user-event";
import './SearchBar.css'; 
import { useState } from "react";

function SearchBar(props){
    
    const [searchTerm, setSearchTerm] = useState(''); 

    const handleChange = (event) =>{
        setSearchTerm(event.target.value); 
    };

    const handleClick = () =>{
        props.search(searchTerm)
    };

    return(
        <div className="SearchBarContainer">
            <input type="text" placeholder="Enter Location Here" onChange={handleChange}/>
            <button onClick={handleClick}>Search!</button>
        </div>
    );
}; 

export default SearchBar; 