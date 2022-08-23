import React from "react";

import TranslateComponent from "../../TranslateComponent/TranslateComponent";

const Admin = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <TranslateComponent str="Administrator" />
      </div>
      <div>
        <TranslateComponent str="You have access to other users" />{" "}
      </div>
    </div>
  );
};
export default Admin;
