import React, { useContext, useState } from "react";
import { StoreContext } from "../store";
import { Observer } from "mobx-react";

const UserCard = () => {
  const { userStore } = useContext(StoreContext);
  const [localState, setLocalState] = useState(false);

  const changeName = () => {
    userStore.setUserName(
      userStore.userName === "Super Vlad" ? "Vlad" : "Super Vlad"
    );
  };

  const changeLocalState = () => {
    setLocalState((prev) => !prev);
  };

  console.log("outSide");

  return (
    <>
      <div>{localState ? "true" : "false"}</div>
      <button onClick={changeLocalState}>Локальный</button>
      <Observer>{() => <div>{userStore.userName}</div>}</Observer>
      <button onClick={changeName}>Сменить имя</button>
    </>
  );
};

export default UserCard;
