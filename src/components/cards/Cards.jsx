import Card from '../card/Card';
import '../cards/cards.css'

export default function Cards({ characters, onClose }) {
   return (
      <div className="cards-container">
         {characters.map((character) => (
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
            />
         ))}
      </div>
   );
}