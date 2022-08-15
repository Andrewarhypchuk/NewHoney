import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'

const LanguageSwitcher = (props) =>{
    return(
        <div className='d-flex flex-column-reverse'>
            <Dropdown>
                <Dropdown.Toggle className='buttonLanguage' id="dropdown-basic">
                    {props.buttonLanguage}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item  onClick={()=>props.changeCurrentLanguage('Ukrainian')}  href="#/action-1">Ukraine</Dropdown.Item>
                    <Dropdown.Item onClick={()=>props.changeCurrentLanguage('English')} href="#/action-2">English</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className='languageName'>{props.language}</div>
        </div>
    )
}
export default LanguageSwitcher