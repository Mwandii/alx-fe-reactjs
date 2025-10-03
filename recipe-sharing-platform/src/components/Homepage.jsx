import { useState } from "react";
import recipesData from "../data.json"

function Homepage() {

    const [recipes, setRecipes] = useState(recipesData)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {recipes.map((recipe) => (
                <div className="bg-white shadow-md rounded-lg" key={recipe.id}>
                <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title}/>
                <div className="p-4">
                    <h2 className="text-lg font-bold">{recipe.title}</h2>
                    <p className="font-light">{recipe.summary}</p>
                    <button className="p-2 hover:bg-gray-900 hover:text-white rounded-lg mt-1">See Full Details</button>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Homepage;