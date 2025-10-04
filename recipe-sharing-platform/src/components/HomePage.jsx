import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);


  


  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => setError("Failed to load Recipes"));
  }, []);

  return (
    <>
    <NavBar/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 font-montserrat bg-stone-200 ">
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
              <p className="font-light ">{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`}><button  className="p-2 hover:bg-gray-900 hover:text-white rounded-lg mt-1">
                See Full Details
              </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default Homepage;
