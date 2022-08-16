import React from "react";
import {useSelector} from "react-redux";
import { selectAdmin } from "../../../Redux/usersSetting-reducer";
import TranslateComponent from './../../TranslateComponent/TranslateComponent';

const IsAdminComponent = () =>{

    const Admin = useSelector(selectAdmin);
return(
       <div><TranslateComponent  str='Is admin' />:  {Admin.toString()}</div>
) 

}
export default IsAdminComponent;