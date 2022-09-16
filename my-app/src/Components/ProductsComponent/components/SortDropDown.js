import React from "react";
import { useDispatch } from 'react-redux';

import Dropdown from "react-bootstrap/Dropdown";
import TranslateComponent from '../../TranslateComponent/TranslateComponent';
import { FROM_LOW_PRICE, RANDOM_PRICE } from '../../../Utiles/consts';
import { changeSortValue } from "../../../Redux/products-reducer";
import { FROM_HIGH_PRICE } from './../../../Utiles/consts';

const SortDropDown = () => {
    const dispatch = useDispatch();

    return (
        <Dropdown>
            <Dropdown.Toggle className="buttonLanguage languageButton" id="dropdown-basic">
                <TranslateComponent str="Sort by price" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => dispatch(changeSortValue(RANDOM_PRICE))}
                    href="#/action-1"
                >
                    <TranslateComponent str={RANDOM_PRICE} />
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => dispatch(changeSortValue(FROM_HIGH_PRICE))}
                    href="#/action-1"
                >
                    <TranslateComponent str={FROM_HIGH_PRICE} />
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => dispatch(changeSortValue(FROM_LOW_PRICE))}
                    href="#/action-2"
                >
                    <TranslateComponent str={FROM_LOW_PRICE} />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SortDropDown;