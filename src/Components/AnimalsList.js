import React from 'react';
import AnimalCard from './AnimalCard'

const AnimalsList = (props) => {
  return (
    <div className="animals-container">
      {props.animals.map(animal => <AnimalCard {...animal} key={animal.name} />)}
    </div>
  )
}

export default AnimalsList;