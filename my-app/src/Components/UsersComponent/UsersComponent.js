import React from "react";

import AddUserModal from "./components/AddUserModal";
import UserList from "./components/UserList";

const Users = () => {
  
  return (
    <div className="d-flex flex-column  align-items-center">
      <AddUserModal />
      <UserList />
    </div>
  )
};

export default Users;
