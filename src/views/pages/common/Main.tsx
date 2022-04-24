import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
// const OtherComponent = React.lazy(() => import('./OtherComponent'));

const Main = () => {
  return (
    //   code splitting
    <div className="container pl-20 mx-auto">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
