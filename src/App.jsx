import Admin from './Admin/Admin';
import Dashboard from './Components/Dashboard'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Serach1 from './Search/Serach1';
import Solution1 from './Solution/Solution1';

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element: <Dashboard/>
  },
  {
    path:"/customer",
    element: <Dashboard/>
  },
  {
    path:"/admin",
    element: <Admin/>
  },
  {
    path:"/dashboard",
    element: <Dashboard/>
  },
  {
    path:"/search",
    element: <Serach1/>
  },{
    path:"/solution",
    element: <Solution1/>
  }
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
