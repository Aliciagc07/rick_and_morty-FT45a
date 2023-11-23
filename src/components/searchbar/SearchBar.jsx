import React from 'react'
import './searchBar.css';
export default function SearchBar(props) {

   const [id, setId] = React.useState("");
   const handleChange = event => {
      const { value } = event.target;
      setId(value);
   }
   return (
      <div className='search-container'>
         <input className="searchbar" type="text" name="search" id="search"
            onChange={handleChange} />
         <button className="button" onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
