import React from 'react';
import ImageItem from "../../ImageItem";

const SpeciesModal = (props) => {

    const species = props.data;

    return (
        <div>
            <h1>{species.name}</h1>
            <div className="modal__item">
                <ImageItem id={species.url} categories={props.categories} />
                <div className="modal__text">
                    <p>Classification: {species.classification}</p>
                    <p>Language: {species.language}</p>
                    <p>Designation: {species.designation}</p>
                    <p>Average Height: {species.average_height}</p>
                    <p>Average Lifespan: {species.average_lifespan}</p>
                    <p>Skin Colors: {species.skin_colors}</p>
                    <p>Hair Colors: {species.hair_colors}</p>
                    <p>Eye Colors: {species.eye_colors}</p>
                </div>
            </div>
        </div>
    );
};

export default SpeciesModal;