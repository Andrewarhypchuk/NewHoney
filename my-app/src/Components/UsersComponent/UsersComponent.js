import React ,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import TranslateComponent from "../TranslateComponent/TranslateComponent";
import { selectAdmin } from "./../../Redux/userSettings-reducer";
import { selectUsers, setUsers } from './../../Redux/users-reducer';

const Users = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector(selectAdmin);
  const users = useSelector(selectUsers);
 
  const usersPresentation = users.users.map((user)=>{
           return <div>{user.id}</div>
  })

  useEffect(()=>{
    users.users.length === 0 && dispatch(setUsers);
  })

  return isAdmin ? (
    {usersPresentation}
  ) : (
    <TranslateComponent str="You dont have access" />
  );
};

export default Users;
