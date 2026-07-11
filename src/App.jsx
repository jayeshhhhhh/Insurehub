import Home from "./component/home/Home";
import Dashboard from "./component/home/Dashboard";
import Login from "./component/home/Login";
import About from "./component/home/Aboutus";
import Contact from "./component/home/Contact";
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  {path: "/",
     element: <Home />},
  {path: "/dashboard", 
    element: <Dashboard />},
    {path: "/login",
    element: <Login />},  
    {path: "/about",
    element: <About />},
    {path: "/contact",
    element: <Contact />},
   
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;