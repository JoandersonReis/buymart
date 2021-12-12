import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home";
import { Store } from "./pages/Store";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  )
}


export { Router }
