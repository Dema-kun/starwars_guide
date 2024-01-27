import React from 'react';
import ImageItem from "../../ImageItem";

const FilmsModal = (props) => {
    const film = props.data;

    return (
        <div>
            <h1>{film.name}</h1>
            <div className="modal__item">
                <ImageItem id={film.url} categories={props.categories} />
                <div className="modal__text">
                    <p>Date Created: {film.release_data}</p>
                    <p>Director: {film.director}</p>
                    <p>Producer(s): {film.producer}</p>
                    <p>Opening Crawl: {film.opening_crawl}</p>
                </div>
            </div>
        </div>
    );
};

export default FilmsModal;