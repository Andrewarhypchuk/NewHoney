import React ,{ useEffect} from "react";
import { useSelector ,useDispatch } from "react-redux";

import Admin from "./components/AdminComponent";
import User from "./components/UserComponent";
import TranslateComponent from "./../TranslateComponent/TranslateComponent";
import { selectAdmin, selectLogged } from "./../../Redux/userSettings-reducer";
import { setCarts } from './../../Redux/carts-reducer';
import { setProducts } from './../../Redux/products-reducer';

const Profile = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector(selectAdmin);
  const isLogged = useSelector(selectLogged);

  useEffect(()=>{
      dispatch(setCarts())
      dispatch(setProducts())  
  })

   if(isAdmin)return <Admin />
   if(isLogged)return <User />
   
   return <TranslateComponent str="Sorry , you are not logged" /> 
};

export default Profile;
