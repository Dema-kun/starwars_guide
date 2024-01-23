import React from 'react';
import ImageItem from "../../ImageItem";

const PeopleModal = (props) => {

    const people = props.data;

    return (
        <div>
            <h1>{people.name}</h1>
            <div className="modal__item">
                <ImageItem id={people.url} categories={props.categories} />
                <div className="modal__text">
                    <p>Birth Year: {people.birth_year}</p>
                    <p>Species: {people.species.length ? people.species : "None"}</p>
                    <p>Height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                    <p>Gender: {people.gender}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Color: {people.skin_color}</p>
                    <p>Homeworld: {people.homeworld ? people.homeworld : "None"}</p>
                </div>
            </div>
        </div>
    );
};

export default PeopleModal;