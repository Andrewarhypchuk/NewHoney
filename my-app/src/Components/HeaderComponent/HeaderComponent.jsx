import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import LogoComponent from "./Components/LogoComponent";
import NavBarComponent from "./Components/NavBarComponent";
import { useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {changeLanguage, changeTheme} from "../../Redux/usersSetting-reducer";
import ThemeSwitcher from "./Components/ThemeSwitcherComponent";
import LanguageSwitcher from "./Components/LanguageSwitcher";



const Header = () =>{
 const [header,setHeader] = useState('Store');
 const [HyperLogin,setHyperLogin] = useState('Login');
 const [HyperUsers,setHyperUsers] = useState('Users');
 const [HyperProducts,setHyperProducts] = useState('Products');
 const [HyperProfile,setHyperProfile] = useState('Profile');
 const [buttonChangeLanguage,setButtonChangeLanguage] = useState('Change Language');
 const [language,setLanguage] = useState('English');
 const dispatch = useDispatch();
    const userSettingsTheme = useSelector((state)=> state.usersSetting.value.theme);
    const userSettingsName = useSelector((state)=> state.usersSetting.value.name);

    function  changeCurrentTheme(){
          if(userSettingsTheme === 'Light'){
              dispatch(changeTheme('Dark'))
          }else{
              dispatch(changeTheme('Light'))
          }
      }
      function changeCurrentLanguage(selectedLanguage){
         dispatch(changeLanguage(selectedLanguage))
          if(selectedLanguage === 'English' ){
              setHeader('Store')
              setHyperLogin('Login')
              setHyperUsers('Users')
              setHyperProducts('Products')
              setHyperProfile('Profile')
              setButtonChangeLanguage('Change Language')
              setLanguage('English')

          }
          if(selectedLanguage === 'Ukrainian'){
              setHeader('Магазин')
              setHyperLogin('Вхід')
              setHyperUsers('Користувачі')
              setHyperProducts('Товари')
              setHyperProfile('Користувач')
              setButtonChangeLanguage('Змінити мову')
              setLanguage('Українська')
          }
      }

return(
    <div className={userSettingsTheme}>
       <LogoComponent header={header} name={userSettingsName} />
       <NavBarComponent login={HyperLogin} users={HyperUsers} products={HyperProducts} profile={HyperProfile} />
       <ThemeSwitcher changeTheme={changeCurrentTheme} theme={userSettingsTheme} />
       <LanguageSwitcher
           changeCurrentLanguage={changeCurrentLanguage}
           buttonLanguage={buttonChangeLanguage}
           language={language}
       />
    </div>
)
}
export default Header;
