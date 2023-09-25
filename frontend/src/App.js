import "./App.css";
//need to install reac-router-dom from react 6
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./views/cartPage/CartPage";
// import HomePage from "./views/homePage/homePage";
import MealsPage from "./views/mealsPage/MealsPage";
import MobileNav from "./components/navbar/MobileNav";


function App() {
  return (
    <div className="App">
      <Router>
      <MobileNav/>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/meals" element={<MealsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
