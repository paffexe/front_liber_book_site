import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { MainLayout } from "./layout/main-layout";
import ProductDetail from "./pages/product-detail/productDetail";
import Profile from "./components/profile";
import ProfileLayout from "./layout/profile-layout";
import Wallet from "./pages/profile/Wallet";
import Books from "./pages/profile/Books";
import Wishlist from "./pages/profile/Wishlist";
import Settings from "./pages/profile/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="my-books" element={<Books />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
