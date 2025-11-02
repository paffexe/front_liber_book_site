import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { MainLayout } from "./layout/main-layout";
import ProductDetail from "./pages/product-detail/productDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
