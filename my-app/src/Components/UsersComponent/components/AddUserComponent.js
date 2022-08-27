import React, { useState } from "react";
import { generatedId } from "./../../../Utiles/generateId";
import { addUser } from "../../../Redux/users-reducer";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const [newUser, setNewUser] = useState({
    id: "",
    username: "",
    password: "",
    address: {
      city: "",
      street: "",
    },
    email: "",
    phone: "",
  });

  const setId = () => {
    let newId = generatedId();
    setNewUser((prevState) => ({
      ...prevState,
      id: newId,
    }));
  };
  const checkFields = () => {
    return (
      newUser.username.trim() !== "" &&
      newUser.password.trim() !== "" &&
      newUser.address.city.trim() !== "" &&
      newUser.address.street.trim() !== "" &&
      newUser.email.trim() !== "" &&
      newUser.phone.trim() !== ""
    );
  };
  const cleanFields = () => {
    setNewUser({
      id: "",
      username: "",
      password: "",
      address: {
        city: "",
        street: "",
      },
      email: "",
      phone: "",
    });
  };
  const addNewUser = () => {
    setIsOpened(!isOpened);
    checkFields() && dispatch(addUser(newUser));
    cleanFields();
  };

  return (
    <div
      className={
        isOpened
          ? "add_user_container_opened d-flex flex-column-reverse align-items-center"
          : "add_user_container d-flex flex-column align-items-center"
      }
    >
      <button
        className={isOpened ? "btn btn-success button" : "btn btn-info button"}
        onClick={isOpened ? () => addNewUser() : () => setIsOpened(!isOpened)}
      >
        Add a user
      </button>
      <form className="form">
        <div>* Id will generate automatically</div>
        <div className="form-group">
          <label className="label" for="username">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={newUser.username}
            onBlur={() => setId()}
            onChange={(e) =>
              setNewUser((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
            placeholder="Enter username"
          ></input>
        </div>
        <div className="form-group ">
          <label className="label" for="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            placeholder="Enter password"
          ></input>
        </div>
        <div className="form-group ">
          <label className="label" for="city">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Enter city"
            value={newUser.address.city}
            onChange={(e) =>
              setNewUser((prevState) => ({
                ...prevState,
                address: { ...prevState.address, city: e.target.value },
              }))
            }
          ></input>
        </div>
        <div className="form-group ">
          <label className="label" for="street">
            Street
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            placeholder="Enter street"
            value={newUser.address.street}
            onChange={(e) =>
              setNewUser((prevState) => ({
                ...prevState,
                address: { ...prevState.address, street: e.target.value },
              }))
            }
          ></input>
        </div>
        <div className="form-group ">
          <label className="label" for="email">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={newUser.email}
            onChange={(e) =>
              setNewUser((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="form-group ">
          <label className="label" for="phone">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
            value={newUser.phone}
            onChange={(e) =>
              setNewUser((prevState) => ({
                ...prevState,
                phone: e.target.value,
              }))
            }
          ></input>
        </div>
        <div> * all fields must be filled</div>
      </form>
    </div>
  );
};
export default AddUser;
