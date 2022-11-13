import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import Board from "./screens/Board";
import store from "./store";

export default function Simon() {
  return (
  <>
    <Provider store={store}>
      <Board />
    </Provider>,
  </>
  );
}