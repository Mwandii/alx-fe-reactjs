import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <p className="text-center mt-10">Recipe not found.</p>;

  // Normalize ingredients and instructions so both formats work
  const ingredients = Array.isArray(recipe.ingredients)
    ? recipe.ingredients
    : recipe.ingredients.split(",").map((i) => i.trim());

  const instructions = Array.isArray(recipe.instructions)
    ? recipe.instructions
    : recipe.instructions.split(",").map((s) => s.trim());

  return (
    <div className="bg-stone-200 m-0 pb-6">
      <NavBar />
      <div className="font-montserrat">
        <div className="flex flex-col justify-center items-center p-10">
          <img
            className="rounded-3xl shadow-xl max-w-[90%] sm:max-w-[600px] object-cover"
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
        <div className="bg-white rounded-xl shadow-lg mx-10 my-5 p-5">
          <h2 className="text-2xl font-bold p-2 mt-5">{recipe.title}</h2>
          <h3 className="font-semibold text-lg p-2">Ingredients</h3>
          <ul className="list-disc ml-6">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg mx-10 mt-5 p-5">
          <h3 className="font-semibold m-2 text-lg">Instructions</h3>
          <ol className="list-decimal ml-6">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
