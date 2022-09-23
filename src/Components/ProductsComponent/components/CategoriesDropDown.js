import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import Dropdown from "react-bootstrap/Dropdown";
import TranslateComponent from './../../TranslateComponent/TranslateComponent';
import { ALL, ELECTRONICS, JEWELERY, MEN_CLOTHING, WOMEN_CLOTHING } from './../../../Utiles/consts';
import { changeCategory } from "../../../Redux/products-reducer";


const CategoriesList = () => {
    const dispatch = useDispatch();
    const [activeItem, setActiveItem] = useState(ALL)

    const handleSelectedChange = (eventKey, event) => {
        setActiveItem(eventKey)
        dispatch(changeCategory(eventKey))
    }

    return (
        <Dropdown onSelect={handleSelectedChange}>
            <Dropdown.Toggle className="buttonLanguage languageButton" id="dropdown-basic">
                <TranslateComponent str={activeItem} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    active={activeItem === ALL}
                    eventKey={ALL}
                >
                    <TranslateComponent str={ALL} />
                </Dropdown.Item>
                <Dropdown.Item
                    active={activeItem === ELECTRONICS}
                    eventKey={ELECTRONICS}
                >
                    <TranslateComponent str={ELECTRONICS} />
                </Dropdown.Item>
                <Dropdown.Item
                    active={activeItem === JEWELERY}
                    eventKey={JEWELERY}
                >
                    <TranslateComponent str={JEWELERY} />
                </Dropdown.Item>
                <Dropdown.Item
                    active={activeItem === MEN_CLOTHING}
                    eventKey={MEN_CLOTHING}
                >
                    <TranslateComponent str={MEN_CLOTHING} />
                </Dropdown.Item>
                <Dropdown.Item
                    active={activeItem === WOMEN_CLOTHING}
                    eventKey={WOMEN_CLOTHING}
                >
                    <TranslateComponent str={WOMEN_CLOTHING} />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CategoriesList;