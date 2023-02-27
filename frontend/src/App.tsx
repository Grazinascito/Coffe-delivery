import { Routes, Route } from "react-router-dom";
import { Layout } from "./Template/Layout";
import "./styles/themes";
import { CheckoutPage } from "./components/organism/CheckoutPage/CheckoutPage";
import { globalStyles } from "./styles/global";

import { MainLayout } from "./MainLayout";

function App() {
  globalStyles();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainLayout />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
