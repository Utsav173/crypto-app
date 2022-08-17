
import Homepage from "./Pages/HomePage";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";

import Header from "./Components/Header";

const usestyles = makeStyles(() => ({
  App: {
    backgroundColor: "#101214",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = usestyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} exact />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
