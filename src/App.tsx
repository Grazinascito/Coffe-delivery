import { useEffect, useState } from "react";
import "./services/miragejs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Template/Layout";

function App() {
  useEffect(() => {
    fetch("/api/coffees")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
