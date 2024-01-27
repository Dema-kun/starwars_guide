import React from 'react';
import ImageItem from "../../ImageItem";

const PlanetsModal = (props) => {

    const planet = props.data;

    return (
        <div>
            <h1>{planet.name}</h1>
            <div className="modal__item">
                <ImageItem id={planet.url} categories={props.categories} />
                <div className="modal__text">
                    <p>Population: {planet.population}</p>
                    <p>Gravity: {planet.gravity}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Surface Water: {planet.surface_water}</p>
                    <p>Rotation period: {planet.rotation_period}</p>
                    <p>Orbital period: {planet.orbital_period}</p>
                    <p>Diameter: {planet.diameter}</p>
                </div>
            </div>
        </div>
    );
};

export default PlanetsModal;