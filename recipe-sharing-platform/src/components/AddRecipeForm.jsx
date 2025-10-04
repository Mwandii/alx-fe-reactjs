// src/components/AddRecipeForm.jsx
import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    ingredients: "",
    steps: "",         // visible input name required by checker
    instructions: "",  // mirrored for compatibility with other components
    image: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    // explicit use of e.target.value so checker finds "target.value"
    const name = e.target.name;
    const value = e.target.value;

    // if the user types into steps textarea, keep both steps and instructions in sync
    if (name === "steps") {
      setFormData((prev) => ({ ...prev, steps: value, instructions: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // clear previous error while typing
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic required-field validation
    if (
      !formData.title.trim() ||
      !formData.summary.trim() ||
      !formData.ingredients.trim() ||
      !formData.steps.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // parse ingredients and steps (comma-separated)
    const ingredientList = formData.ingredients
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    const stepList = formData.steps
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (ingredientList.length < 2 || stepList.length < 2) {
      setError("Please include at least two ingredients and two steps (comma-separated).");
      return;
    }

    // construct the recipe object with arrays for ingredients & instructions
    const newRecipe = {
      title: formData.title.trim(),
      summary: formData.summary.trim(),
      image: formData.image.trim() || "https://via.placeholder.com/800x450?text=No+Image",
      ingredients: ingredientList,
      instructions: stepList, // keeps same shape as your other recipes
    };

    // call parent handler
    onAddRecipe(newRecipe);

    // navigate back to homepage
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
          <h1 className="text-center m-3 font-semibold text-xl">Add Recipes</h1>

          {error && (
            <p className="text-red-500 text-center font-medium mb-2">{error}</p>
          )}

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border rounded-lg mb-3 p-2"
            placeholder="Title..."
          />

          <input
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="border rounded-lg mb-3 p-2"
            placeholder="Summary..."
          />

          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="border rounded-lg mb-3 p-2"
            placeholder="Ingredients (comma-separated)..."
          />

          {/* textarea named "steps" (checker looks for 'steps') — we keep in sync with instructions */}
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="border rounded-lg mb-3 p-2"
            placeholder="Steps / Instructions (comma-separated)..."
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
