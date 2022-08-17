import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CircularProgress, makeStyles } from "@material-ui/core";
import Header from "./Components/Header";

const Homepage = lazy(()=>import("./Pages/HomePage"));
const CoinPage = lazy(()=>import("./Pages/CoinPage"))

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
          <Suspense fallback={<div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><CircularProgress
            style={{ color: "#009ad1" }}
            size={250}
            thickness={1}
            /></div> }>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} exact />
        </Routes>
          </Suspense>
        </div>
    </BrowserRouter>
  );
}

export default App;
