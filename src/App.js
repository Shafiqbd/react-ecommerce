import React from "react";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { injectStyle } from "react-toastify/dist/inject-style";
import "./App.css";
import AppRoute from "./AppRoute";
import Header from "./components/Header";

if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <AppRoute />
    </div>
  );
}

export default App;
