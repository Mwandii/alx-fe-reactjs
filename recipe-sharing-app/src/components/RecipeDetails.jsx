import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>
          Remove from Favorites
        </button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>
          Add to Favorites
        </button>
      )}

      <Link to={`/edit/${recipe.id}`}>Edit</Link>
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetail;