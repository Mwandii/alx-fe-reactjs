import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: all fields filled
    if (
      !formData.title.trim() ||
      !formData.summary.trim() ||
      !formData.ingredients.trim() ||
      !formData.instructions.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // Validation: at least two ingredients and two instructions
    const ingredientList = formData.ingredients
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i);
    const instructionList = formData.instructions
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i);

    if (ingredientList.length < 2 || instructionList.length < 2) {
      setError(
        "Please include at least two ingredients and two instructions (comma-separated)."
      );
      return;
    }

    // Submit data
    onAddRecipe({
      ...formData,
      ingredients: ingredientList,
      instructions: instructionList,
    });

    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex justify-center items-center px-4 bg-stone-200">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md bg-white p-5 rounded-2xl shadow-xl"
        >
          <h1 className="text-center m-3 font-semibold text-xl">
            Add Recipes
          </h1>

          {error && (
            <p className="text-red-500 text-center font-medium mb-2">{error}</p>
          )}

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border rounded-lg mb-3 p-2"
            required
            placeholder="Title..."
          />
          <input
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="border rounded-lg mb-3 p-2"
            required
            placeholder="Summary..."
          />
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="border rounded-lg mb-3 p-2"
            required
            placeholder="Ingredients (comma-separated)..."
          />
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="border rounded-lg mb-3 p-2"
            required
            placeholder="Instructions (comma-separated)..."
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border rounded-lg mb-3 p-2"
            placeholder="Image URL (optional)..."
          />
          <button className="font-semibold rounded-lg bg-stone-200 hover:bg-gray-900 hover:text-white m-2 p-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddRecipeForm;
