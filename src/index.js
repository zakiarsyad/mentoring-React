import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/output.css";
import { createStore } from "redux";

import reducer from "./reducer";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <App
      items={store.getState()}
      setItems={(type, item) => {
        const action = {
          type: type,
          data: item,
        };
        
        store.dispatch(action);
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
