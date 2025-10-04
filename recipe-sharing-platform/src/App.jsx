import Homepage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  // ✅ Load recipes from localStorage (or from data.json if first time)
  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    } else {
      fetch("/src/data.json")
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data);
          localStorage.setItem("recipes", JSON.stringify(data)); // save initial data
        })
        .catch(() => console.error("Failed to load Recipes"));
    }
  }, []);

  // ✅ Every time recipes change, update localStorage
  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);

  const addRecipe = (newRecipe) => {
    const updatedRecipes = [
      ...recipes,
      { id: recipes.length + 1, ...newRecipe },
    ];
    setRecipes(updatedRecipes);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/addrecipeform" element={<AddRecipeForm onAddRecipe={addRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;
