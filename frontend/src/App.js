
import './App.css';
//need to install reac-router-dom from react 6
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CartPage from "./views/cartPage/CartPage";
import MealsPage from "./views/mealsPage/MealsPage";

function App() {
  return (
<div className='App'>
        <Router>
          <Routes>
            <Route path="/meals" element={<MealsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <h1>Biobites</h1>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
