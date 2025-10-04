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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const ingredientsArr = formData.ingredients
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i);
    const instructionsArr = formData.instructions
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s);

    // 🧩 Validation
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.summary.trim()) newErrors.summary = "Summary is required.";
    if (!formData.image.trim()) newErrors.image = "Image URL is required.";
    if (ingredientsArr.length < 2)
      newErrors.ingredients = "At least 2 ingredients required (comma separated).";
    if (instructionsArr.length < 2)
      newErrors.instructions = "At least 2 instructions required (comma separated).";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save structured recipe
    const newRecipe = {
      title: formData.title,
      summary: formData.summary,
      image: formData.image,
      ingredients: ingredientsArr,
      instructions: instructionsArr,
    };

    onAddRecipe(newRecipe);
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

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border rounded-lg mb-1 p-2"
            placeholder="Title..."
          />
          {errors.title && <p className="text-red-500 text-sm mb-2">{errors.title}</p>}

          <input
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="border rounded-lg mb-1 p-2"
            placeholder="Summary..."
          />
          {errors.summary && <p className="text-red-500 text-sm mb-2">{errors.summary}</p>}

          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border rounded-lg mb-1 p-2"
            placeholder="Image URL..."
          />
          {errors.image && <p className="text-red-500 text-sm mb-2">{errors.image}</p>}

          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="border rounded-lg mb-1 p-2"
            placeholder="Ingredients (separate with commas)"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mb-2">{errors.ingredients}</p>
          )}

          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="border rounded-lg mb-1 p-2"
            placeholder="Instructions (separate with commas)"
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mb-2">{errors.instructions}</p>
          )}

          <button className="font-semibold rounded-lg bg-stone-200 hover:bg-gray-900 hover:text-white m-2 p-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddRecipeForm;
