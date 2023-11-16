import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import SingleProdPage from "./pages/SingleProdPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<SingleProdPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
