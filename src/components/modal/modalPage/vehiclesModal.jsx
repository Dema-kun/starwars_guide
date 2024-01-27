import React from 'react';
import ImageItem from "../../ImageItem";

const VehiclesModal = (props) => {
    
    const vehicle = props.data; 
    
    return (
        <div>
            <h1>{vehicle.name}</h1>
            <div className="modal__item">
                <ImageItem id={vehicle.url} categories={props.categories} />
                <div className="modal__text">
                    <p>Model: {vehicle.model}</p>
                    <p>Manufacturer: {vehicle.manufacturer}</p>
                    <p>Cost in credits: {vehicle.cost_in_credits}</p>
                    <p>Length: {vehicle.length}</p>
                    <p>Crew: {vehicle.crew}</p>
                    <p>Vehicle class: {vehicle.vehicle_class}</p>
                    <p>Pilots: {vehicle.pilots.length ? vehicle.pilots : "None"}</p>
                    <p>Films: {vehicle.films.length ? vehicle.films : "None"}</p>
                </div>
            </div>
        </div>
    );
};

export default VehiclesModal;