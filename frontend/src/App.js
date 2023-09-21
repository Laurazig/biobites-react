
import './App.css';
//need to install reac-router-dom from react 6
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CartPage from "./views/cartPage/CartPage";
import MealsPage from "./views/mealsPage/MealsPage";

function App() {
  let data = require("./views/mealsPage/meals.json")
  return (
<div className='App'>
        <Router>
          <Routes>
            <Route path="/meals" element={<MealsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
            <h1>Biobites</h1>
            <h2>meal name {data.mealName}</h2>
        </Router>
      </div>
  );
}

export default App;
