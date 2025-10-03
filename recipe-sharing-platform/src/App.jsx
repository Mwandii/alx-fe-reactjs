import Homepage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from "./components/RecipeDetail";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;