import React from "react";
import "./index.css";
import App from "./App";


import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";

import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
);

// const root =  ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <CryptoContext>
//       <App />
//     </CryptoContext>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
