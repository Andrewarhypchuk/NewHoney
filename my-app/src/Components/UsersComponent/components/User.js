import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteUser, editUser } from "../../../Redux/users-reducer";
import TranslateComponent from "../../TranslateComponent/TranslateComponent";

const User = (props) => {
  const dispatch = useDispatch();
  const [changeUser, setChangeUser] = useState(false);
  const [editVersion, setEditVersion] = useState({
    id: props.user.id,
    username: props.user.username,
    password: props.user.password,
    address: {
      city: props.user.address.city,
      street: props.user.address.street,
    },
    email: props.user.email,
    phone: props.user.phone,
  });

  return (
    <div className="userComponent d-flex justify-content-around align-items-center">
      <div className="flex-column">
        <div className="d-flex">
          <TranslateComponent str="Id" /> :<div>{props.user.id}</div>
        </div>
        <div className="d-flex">
          <TranslateComponent str="Username" />:
          {changeUser ? (
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              value={editVersion.username}
              onChange={(e) =>
                setEditVersion((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
            ></input>
          ) : (
            <div>{props.user.username}</div>
          )}
        </div>
        <div className="d-flex">
          <TranslateComponent str="Password" />:
          {changeUser ? (
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              value={editVersion.password}
              onChange={(e) =>
                setEditVersion((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            ></input>
          ) : (
            <div>{props.user.password}</div>
          )}
        </div>
        <div className="d-flex">
          <TranslateComponent str="City" />:
          {changeUser ? (
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              value={editVersion.address.city}
              onChange={(e) =>
                setEditVersion((prevState) => ({
                  ...prevState,
                  address: { ...prevState.address, city: e.target.value },
                }))
              }
            ></input>
          ) : (
            <div>{props.user.address.city}</div>
          )}
        </div>
        <div className="d-flex">
          <TranslateComponent str="Street" />:
          {changeUser ? (
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              value={editVersion.address.street}
              onChange={(e) =>
                setEditVersion((prevState) => ({
                  ...prevState,
                  address: { ...prevState.address, street: e.target.value },
                }))
              }
            ></input>
          ) : (
            <div>{props.user.address.street}</div>
          )}
        </div>
        <div className="d-flex">
          <TranslateComponent str="Email" />:
          {changeUser ? (
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              value={editVersion.email}
              onChange={(e) =>
                setEditVersion((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            ></input>
          ) : (
            <div>{props.user.email}</div>
          )}
        </div>
        <div className="d-flex">
          <TranslateComponent str="Phone" />:
          {changeUser ? (
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              value={editVersion.phone}
              onChange={(e) =>
                setEditVersion((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
            ></input>
          ) : (
            <div>{props.user.phone}</div>
          )}
        </div>
      </div>
      <div className="d-flex">
        {changeUser ? (
          <button
            type="button"
            className="btn btn-success button"
            onClick={() => {
              setChangeUser(!changeUser);
              dispatch(editUser(editVersion));
            }}
          >
            <TranslateComponent str="Сonfirm Сhanges" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setChangeUser(!changeUser)}
            className="btn btn-warning button"
          >
            <TranslateComponent str="Edit" />
          </button>
        )}
        <button
          type="button"
          onClick={() => dispatch(deleteUser(props.user.id))}
          className="btn btn-danger button"
        >
          <TranslateComponent str="Delete" />
        </button>
      </div>
    </div>
  );
};

export default User;
