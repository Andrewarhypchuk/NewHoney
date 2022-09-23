import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUsers, setUsers } from './../../../Redux/users-reducer';
import User from "./User/User";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
 
      useEffect(() => {
        users.users.length === 0 && dispatch(setUsers);
      });

     return(
      users.users.map((user) => {
        return <User key={user.id} user={user} />;
      })
  )
}
export default UserList;