import React from "react";
import { useDispatch } from 'react-redux';

import Dropdown from "react-bootstrap/Dropdown";
import TranslateComponent from './../../TranslateComponent/TranslateComponent';
import { ALL, ELECTRONICS, JEWELERY, MEN_CLOTHING, WOMEN_CLOTHING } from './../../../Utiles/consts';
import { changeCategory } from "../../../Redux/products-reducer";

const CategoriesList = () => {
    const dispatch = useDispatch();

    return (
        <Dropdown>
            <Dropdown.Toggle className="buttonLanguage languageButton" id="dropdown-basic">
                <TranslateComponent str="Filter by category" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => dispatch(changeCategory(ALL))}
                    href="#/action-1"
                >
                    <TranslateComponent str={ALL} />
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => dispatch(changeCategory(ELECTRONICS))}
                    href="#/action-1"
                >
                    <TranslateComponent str={ELECTRONICS} />
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => dispatch(changeCategory(JEWELERY))}
                    href="#/action-2"
                >
                    <TranslateComponent str={JEWELERY} />
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => dispatch(changeCategory(MEN_CLOTHING))}
                    href="#/action-2"
                >
                    <TranslateComponent str={MEN_CLOTHING} />
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => dispatch(changeCategory(WOMEN_CLOTHING))}
                    href="#/action-2"
                >
                    <TranslateComponent str={WOMEN_CLOTHING} />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CategoriesList;