import React from 'react';

const AnimalCard = (props) => {
  return (
    <div className="animal-card">
      <div className="animal-image">
        <img src={props.imgUrl} alt="" />
        <p> {props.name} </p>
      </div>
    </div>
  )
}

export default AnimalCard;