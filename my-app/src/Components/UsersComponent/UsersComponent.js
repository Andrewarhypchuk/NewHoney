import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAdmin } from "./../../Redux/userSettings-reducer";
import { selectUsers, setUsers } from "./../../Redux/users-reducer";
import TranslateComponent from "../TranslateComponent/TranslateComponent";
import AddUser from "./components/AddUserComponent";
import User from "./components/User";

const Users = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector(selectAdmin);
  const users = useSelector(selectUsers);
  const usersList = users.users.map((user) => {
    return <User key={user.id} user={user} />;
  });

  useEffect(() => {
    users.users.length === 0 && dispatch(setUsers);
  });

  return isAdmin ? (
    <div className="d-flex flex-column  align-items-center">
      <AddUser />
      <div>{usersList}</div>
    </div>
  ) : (
    <TranslateComponent str="You dont have access" />
  );
};

export default Users;
