import './App.css';
import React, { useState } from 'react';
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/Nav";
import axios from "axios"

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`${URL}/${id}?key=${API_KEY}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¿El alert debe ser un número entre 1 y 826!');
        }
      });
  }

  const onClose = id => {
    setCharacters(characters.filter(char => char.id !== Number(id)))
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <hr />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
