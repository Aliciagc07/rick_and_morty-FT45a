import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';


import characters, { Rick } from './data.js';
import Nav from "./components/Nav";

function App() {
  return (
    <div className='App'>

      <Cards characters={characters} />
      <Nav></Nav>
    </div>
  );
}

export default App;
