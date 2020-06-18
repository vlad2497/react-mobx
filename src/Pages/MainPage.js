import React from "react";
import CurrentTheme from "./../components/CurrentTheme";
import UserCard from "./../components/UserCard(Observer";
//import UserCard from "./../components/UserCard(observer)";
//import UserCard from "./../components/UserCard(useObserver)";

const MainPage = () => {
  return (
    <div>
      <UserCard />
      <CurrentTheme />
    </div>
  );
};

export default MainPage;
