import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="index" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
