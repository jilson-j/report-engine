import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export const Provider=<RouterProvider router={router}/>