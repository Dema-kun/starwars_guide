import React from 'react';
import "./MyModal.css";
import PeopleModal from "./modalPage/peopleModal";
import FilmsModal from "./modalPage/filmsModal";
import PlanetsModal from "./modalPage/planetsModal";
import SpeciesModal from "./modalPage/speciesModal";
import VehiclesModal from "./modalPage/vehiclesModal";
import StarshipsModal from "./modalPage/starshipsModal";

const MyModal = ({active, setActive, data, categories}) => {

    const selectModal = () => {
        switch (categories) {
            case "people": return <PeopleModal data={data} categories={categories}/>
            case "films": return <FilmsModal data={data} categories={categories}/>
            case "planets": return <PlanetsModal data={data} categories={categories} />
            case "species": return <SpeciesModal data={data} categories={categories} />
            case "vehicles": return <VehiclesModal data={data} categories={categories} />
            case "starships": return <StarshipsModal data={data} categories={categories} />
        }
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={ e => e.stopPropagation()}>
                {selectModal()}
            </div>
        </div>
    );
};

export default MyModal;