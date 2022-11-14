'use client'; 
import { Provider } from "react-redux";
import "../src/index.css";
import Board from "../src/screens/Board";
import store from "../src/store";

export default function Simon() {
  return (
  <>
    <Provider store={store}>
      <Board />
    </Provider>,
  </>
  );
}