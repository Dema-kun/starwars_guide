import React, {useEffect, useState} from 'react';
import Item from "./Item";
import FetchAPI from "./API/FetchAPI";
import NavBar from "./navbar/NavBar";

const ItemList = (props) => {
    const API_URL = `https://swapi.dev/api/${props.categories}/`
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    let pageButton = []

    for (let i = 0; i < maxPage; i++) {
        pageButton.push(i + 1);
    }

    const selectPage = (p) => {
        setPage(p);
    }

    const fecthApi = async () => {
        const response = await FetchAPI.getPage(API_URL, page);
        const result = response.results;
        setResults(result);
        const limitPage = Math.ceil(response.count / 10);
        setMaxPage(limitPage);
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
                        return <Item id={res.url} name={res.name || res.title} categories={props.categories}/>
                    })
                    :
                    <div>Loading</div>
                }

            </div>
        </div>

    );
};

export default ItemList;