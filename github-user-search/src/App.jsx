import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ApiService from './services/ApiService'
import Home from './components/Home' 


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/> 
    },
    {
      path: "apiservice",
      element: <ApiService />
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
