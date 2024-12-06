import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import NotFound from "./pages/NotFound.jsx";
import App from './App.jsx'
import Vision from "./pages/Vision.jsx";
import Endpoint from "./pages/Endpoint.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
       <Route path="vision" element={<Vision />} />
       <Route path="endpoints" element={<Endpoint />} />
      <Route path="*" element={<NotFound />} />
       
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
