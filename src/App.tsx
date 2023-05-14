import { useState, useEffect } from "react";
import api from "./api/meal";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMealPage from "./pages/SingleMealPage";
import { stateType } from "./utils/types";

function App() {
  const [meals, setMeals] = useState<stateType[] | []>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await api.get("/filter.php?c=beef");
        const mealArrays: stateType[][] = Object.values(response.data);
        const [mealArray] = mealArrays;
        setMeals(mealArray);
        console.log(response.data);
      } catch (err) {
        if (err instanceof Error) {
          // Not in the 200 response range
          console.log(err);
        } else {
          console.log(`Error: ${String(err)}`);
        }
      }
    };
    fetchMeals();
  }, []);

  console.log(meals.map((m) => m.strMeal));

  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home meals={meals} />} />
          <Route path="/single-meal/:id" element={<SingleMealPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
