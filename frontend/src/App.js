import React from "react";
import Routes from "./routes/routes";
import Navbar from "./components/Navbar";
import Irarriba from "./components/Irarriba";
import ".//assets/css/App.css";

export default function App() {
  return (
    <>
      <Irarriba />
      <Routes />
    </>
  );
}
