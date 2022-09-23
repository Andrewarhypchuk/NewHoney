import React,{useState} from "react";
import { useDispatch } from 'react-redux';

import Dropdown from "react-bootstrap/Dropdown";
import TranslateComponent from './../../TranslateComponent/TranslateComponent';
import { ALL, ELECTRONICS, JEWELERY, MEN_CLOTHING, WOMEN_CLOTHING } from './../../../Utiles/consts';
import { changeCategory } from "../../../Redux/products-reducer";
import { eventListeners } from "@popperjs/core";

const CategoriesList = () => {
    const dispatch = useDispatch();
    const [activeItem,setActiveItem] = useState(ALL)
    
    const handleSelectedChange = (eventKey,event) =>{
        console.log(eventKey)
        setActiveItem(eventKey)
        dispatch(changeCategory(eventKey))
    }

    return (
        <Dropdown onSelect={handleSelectedChange}>
            <Dropdown.Toggle className="buttonLanguage languageButton" id="dropdown-basic">
                <TranslateComponent str="Filter by category" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item
                    eventKey={ALL}
                >
                    <TranslateComponent str={ALL} />
                </Dropdown.Item>
                <Dropdown.Item
                    eventKey={ELECTRONICS}
                >
                    <TranslateComponent str={ELECTRONICS} />
                </Dropdown.Item>
                <Dropdown.Item
                    eventKey={JEWELERY}
                >
                    <TranslateComponent str={JEWELERY} />
                </Dropdown.Item>
                <Dropdown.Item
                    eventKey={MEN_CLOTHING}
                >
                    <TranslateComponent str={MEN_CLOTHING} />
                </Dropdown.Item>
                <Dropdown.Item
                    eventKey={WOMEN_CLOTHING}
                >
                    <TranslateComponent str={WOMEN_CLOTHING} />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CategoriesList;