import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function RecipeDetail() {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === Number(id));
        setRecipeDetails(found);
      })
      .catch((err) =>
        setError("Could not Fetch Data at the moment. Please try again later")
      );
  }, [id]);

  if (error) return <p>{error}</p>;

  if (!recipeDetails) return <p>loading...</p>;

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <div>
          <img className="mt-10 mx-auto rounded-3xl shadow-xl" src={recipeDetails.image} alt={recipeDetails.title} />
          <div>
            <h2 className="text-2xl font-bold p-2 mt-5" >{recipeDetails.title}</h2>
            <h3 className="font-semibold text-lg p-2" >Ingredients</h3>
            <ul>
              {recipeDetails.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Instructions</h3>
            <ol>
              {recipeDetails.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
