import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import TranslateComponent from './../../TranslateComponent/TranslateComponent';

const CategoriesList = ({setCategory}) => {

    return (
        <Dropdown>
            <Dropdown.Toggle className="buttonLanguage languageButton" id="dropdown-basic">
                <TranslateComponent str="Sort by category" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item
                    onClick={() => setCategory(false)}
                    href="#/action-1"
                >
                    <TranslateComponent str="all" />
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => setCategory("electronics")}
                    href="#/action-1"
                >
                    <TranslateComponent str="electronics" />
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => setCategory("jewelery")}
                    href="#/action-2"
                >
                    <TranslateComponent str="jewelery" />
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => setCategory("men's clothing")}
                    href="#/action-2"
                >
                    <TranslateComponent str="men's clothing" />
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => setCategory("women's clothing")}
                    href="#/action-2"
                >
                    <TranslateComponent str="women's clothing" />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CategoriesList;