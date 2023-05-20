import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import { Children } from "react";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Shared/Login/Login";
import SignUp from "../Components/Shared/SignUp/SignUp";
import Category from "../Components/Pages/Category";
import Blogs from "../Components/Shared/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : "/SignUp",
        element : <SignUp></SignUp>
      },
      {
        path : "/services/:id",
        element : <Category></Category>
      },
      {
        path : "/blogs",
        element : <Blogs></Blogs>
      }
    ]
  },

]);

export default router