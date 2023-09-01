/** @format */

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/index" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
