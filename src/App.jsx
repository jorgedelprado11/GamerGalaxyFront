import { Routes, Route } from "react-router-dom";
import Productos from "./views/Productos/Productos";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="index" element={<Home />} /> */}
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;
