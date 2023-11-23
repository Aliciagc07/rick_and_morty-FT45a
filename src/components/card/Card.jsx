import React from 'react';
import './card.css';

export default function Card(props) {
   return (
      <div className="card-container">
         <button className="close-button" onClick={() => props.onClose(props.id)}>X</button>
         <h2 className='nombre'>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}