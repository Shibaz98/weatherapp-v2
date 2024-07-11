import userEvent from "@testing-library/user-event";
import { useState } from "react";




function SearchBar(props){
    
    const [searchTerm, setSearchTerm] = useState(''); 

    const handleChange = (event) =>{
        setSearchTerm(event.target.value); 
        console.log(searchTerm)
        
    };

    return(
        <div>
            <input type="text" placeholder="Enter Location Here" onChange={handleChange}/>
        </div>
    );
}; 

export default SearchBar; 