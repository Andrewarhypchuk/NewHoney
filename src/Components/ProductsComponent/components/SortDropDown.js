import React from "react";
import { useDispatch } from 'react-redux';

import Dropdown from "react-bootstrap/Dropdown";
import TranslateComponent from '../../TranslateComponent/TranslateComponent';
import { FROM_HIGH_RATE, FROM_LOW_PRICE, RANDOM_PRICE } from '../../../Utiles/consts';
import { changeSortValue } from "../../../Redux/products-reducer";
import { FROM_HIGH_PRICE, RANDOM_RATE, FROM_LOW_RATE } from './../../../Utiles/consts';

const SortDropDown = () => {
    const dispatch = useDispatch();

    return (
        <Dropdown autoClose="outside">
            <Dropdown.Toggle className="buttonLanguage languageButton" id="dropdown-basic">
                <TranslateComponent str="Sort by" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                >
                    <Dropdown drop='end'>
                        <Dropdown.Toggle className="bg-transparent" id="dropdown-basic">
                            <TranslateComponent str='Sort by rate' />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => dispatch(changeSortValue(RANDOM_RATE))} >
                                <TranslateComponent str={RANDOM_RATE} />
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(changeSortValue(FROM_HIGH_RATE))} >
                                <TranslateComponent str={FROM_HIGH_RATE} />
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(changeSortValue(FROM_LOW_RATE))} >
                                <TranslateComponent str='From low rate' />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item
                >
                    <Dropdown drop='end'>
                        <Dropdown.Toggle className="bg-transparent" id="dropdown-basic">
                            <TranslateComponent str='Sort by PRICE' />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => dispatch(changeSortValue(RANDOM_PRICE))}>
                                <TranslateComponent str={RANDOM_PRICE} />
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(changeSortValue(FROM_HIGH_PRICE))}>
                                <TranslateComponent str={FROM_HIGH_PRICE} />
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(changeSortValue(FROM_LOW_PRICE))}>
                                <TranslateComponent str={FROM_LOW_PRICE} />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SortDropDown;