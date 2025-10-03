import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleClick = (id) => {navigate(`/recipe/${id}`)}


  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => setError("Failed to load Recipes"));
  }, []);

  return (
    <>
    <NavBar/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 font-Cormorant Garamond">
      {error ? (
        <p>{error}</p>
      ) : (
        recipes.map((recipe) => (
          <div className="bg-white shadow-md rounded-lg" key={recipe.id}>
            <img
              className="w-full h-48 object-cover"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{recipe.title}</h2>
              <p className="font-light">{recipe.summary}</p>
              <button onClick={() => handleClick(recipe.id)} className="p-2 hover:bg-gray-900 hover:text-white rounded-lg mt-1">
                See Full Details
              </button>
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default Homepage;
