import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store/Store";
import { Provider } from "react-redux";
import AboutUs from "../pages/aboutUs";

const rootElement = document.getElementById("root");

function App() {
  return (
    <Provider store={store}>
      <AboutUs />
    </Provider>
  );
}

ReactDOM.render(<App />, rootElement);
