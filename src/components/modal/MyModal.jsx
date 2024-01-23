import React from 'react';
import "./MyModal.css";
import PeopleModal from "./modalPage/peopleModal";

const MyModal = ({active, setActive, data, categories}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={ e => e.stopPropagation()}>
                    <PeopleModal data={data} categories={categories}/>
            </div>
        </div>
    );
};

export default MyModal;