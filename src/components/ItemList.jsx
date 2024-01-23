import React, {useEffect, useState} from 'react';
import Item from "./Item";
import FetchAPI from "./API/FetchAPI";
import NavBar from "./navbar/NavBar";
import {countPage} from "./API/countPage";
import MyModal from "./modal/MyModal";

const ItemList = (props) => {
    const API_URL = `https://swapi.dev/api/${props.categories}/`
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [pageButton, setPageButton] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [modalData, setModalData] = useState();

    const selectPage = (p) => {
        setPage(p);
    }

    const fecthApi = async () => {
        const response = await FetchAPI.getPage(API_URL, page);
        const result = response.results;
        setResults(result);
        const maxPage = countPage(response.count);
        setPageButton(maxPage);
    };

    useEffect(() => {
        fecthApi();
    }, [page])


    return (
        <div>

            <div>
                <NavBar place={props.categories} pageButton={pageButton} select={selectPage}/>
            </div>
            <div className="item__list">
                {results.length ? results.map((res) => {
                        return (<div onClick={() => {
                            setModalActive(true);
                            setModalData(res);
                        }}>
                        <Item id={res.url} name={res.name || res.title} categories={props.categories} />
                        </div>)
                    })
                    :
                    <div>Loading</div>
                }
                    {modalData ? <MyModal active={modalActive} setActive={setModalActive} data={modalData} categories={props.categories} />
                        : "Loading"}
            </div>
        </div>

    );
};

export default ItemList;