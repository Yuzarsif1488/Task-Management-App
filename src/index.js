import React from "react";
import ReactDOM from "react-dom/client";
// import UserProvider from "./UserContext/UserContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <UserProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </UserProvider>
);
