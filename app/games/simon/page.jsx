'use client'; 
import { Provider } from "react-redux";
import "./src/index.css";
import store from "./src/store";
import Welcome from "./src/screens/Welcome";

export default function Simon() {
  return (
  <>
    <Provider store={store}>
      <Welcome/>
    </Provider>
  </>
  );
}