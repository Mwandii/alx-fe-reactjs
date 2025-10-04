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
    <div className="bg-stone-200 m-0 pb-6">
      <NavBar />
      <div className=" font-montserrat ">
        <div>
          <div className="flex flex-col justify-center items-center  p-10">
          <img className="rounded-3xl shadow-xl" src={recipeDetails.image} alt={recipeDetails.title} />
          </div>
          <div className="bg-white rounded-xl shadow-lg mx-10 my-5 p-5">
            <h2 className="text-2xl font-bold p-2 mt-5" >{recipeDetails.title}</h2>
            <h3 className="font-semibold text-lg p-2" >Ingredients</h3>
            <ul>
              {recipeDetails.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg mx-10 mt-5 p-5">
            <h3 className="font-semibold m-2">Instructions</h3>
            <ol>
              {recipeDetails.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
