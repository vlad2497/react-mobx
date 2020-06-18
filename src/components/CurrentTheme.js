import React, { Component } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../store";

class CurrentTheme extends Component {
  static contextType = StoreContext;

  render() {
    const { themeStore } = this.context;

    return (
      <>
        <div>{themeStore.color}</div>
        <button
          onClick={() => {
            themeStore.setColor("white");
          }}
        >
          Сменить тему
        </button>
      </>
    );
  }
}

export default observer(CurrentTheme);
