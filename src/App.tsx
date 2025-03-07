import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DynamicComponent from "./pages/DynamicComponent";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/components/:name" element={<DynamicComponent />} />
          </Route>
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          style: {
            zIndex: 999999,
          },
          duration: 7000,
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
