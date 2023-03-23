

import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {ContextProvider} from './context/ContextProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <div className="row">
      <p><a href="https://github.com/edwinaquino">Script by https://github.com/edwinaquino</a></p>
      <RouterProvider router={router} />
      </div>
    </ContextProvider>
  </React.StrictMode>
);
