import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DynamicComponent from "./pages/DynamicComponent";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/components/:name" element={<DynamicComponent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
