import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppRoute from "./AppRoute";
import Header from "./components/Header";

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
