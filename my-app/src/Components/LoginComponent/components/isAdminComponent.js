import React from "react";
import {useSelector} from "react-redux";
import TranslateComponent from './../../TranslateComponent/TranslateComponent';

const IsAdminComponent = () =>{

    const userSettingsIsAdmin = useSelector((state)=> state.usersSetting.value.isAdmin);
return(
       <div><TranslateComponent  str='Is admin' />:  {userSettingsIsAdmin.toString()}</div>
) 

}
export default IsAdminComponent;