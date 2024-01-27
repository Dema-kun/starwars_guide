import React from 'react';
import ImageItem from "../../ImageItem";

const StarshipsModal = (props) => {
    
    const starship = props.data;
    
    return (
        <div>
            <h1>{starship.name}</h1>
            <div className="modal__item">
                <ImageItem id={starship.url} categories={props.categories} />
                <div className="modal__text">
                    <p>Model: {starship.model}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Cost in credits: {starship.cost_in_credits}</p>
                    <p>Length: {starship.length}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>Starship class: {starship.starship_class}</p>
                    <p>Pilots: {starship.pilots.length ? starship.pilots : "None"}</p>
                    <p>Films: {starship.films.length ? starship.films : "None"}</p>
                </div>
            </div>
        </div>
    );
};

export default StarshipsModal;