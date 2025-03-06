import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DynamicComponent from "./pages/DynamicComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/:name" element={<DynamicComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
