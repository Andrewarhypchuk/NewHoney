import React, { useState } from "react";
import TranslateComponent from "../../../TranslateComponent/TranslateComponent";
import UserEdition from "./components/UserEdition";
import UserPresentation from "./components/UserPresentation";

const User = (props) => {
  const [presentationStatus, setPresentationStatus] = useState(true)

  return (
    <div className="userComponent">
      <p><TranslateComponent str="Status:" />{presentationStatus ? 'Presentation' : "Edition"}</p>
      {presentationStatus && <UserPresentation user={props.user} /> || <UserEdition user={props.user} setStatus={setPresentationStatus} />}
      <button className="btn btn-info" onClick={() => setPresentationStatus(!presentationStatus)}><TranslateComponent str='Change status'/></button>
    </div>
  )
};

export default User;
