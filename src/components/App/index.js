import React from "react";
import "./styles.css";
import MainPage from "../../Pages/MainPage";
import { StoreProvider } from "../../store";
import store from "../../store";

function App() {
  return (
    <div className="App">
      <StoreProvider value={store}>
        <MainPage />
      </StoreProvider>
    </div>
  );
}

export default App;
