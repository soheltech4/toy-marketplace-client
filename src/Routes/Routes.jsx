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
import AdaToy from "../Components/Pages/AdaToy";
import MyToys from "../Components/Pages/MyToys";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpdateToy from "../Components/Pages/UpdateToy";
import AllToys from "../Components/Pages/AllToys";
import ViewDetails from "../Components/Pages/ViewDetails";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
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
      },
      // {
      //   path : "/services/:id",
      //   element : <Category></Category>,
      //   loader : ({params}) => fetch(`https://toy-world-server-ten.vercel.app/services/${params._id}`)
      // },
      {
        path : "/toys",
        element : <PrivateRoutes><AdaToy></AdaToy></PrivateRoutes>
      },
      {
        path : "/mytoys",
        element : <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path : "/toys/:id",
        element : <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
        loader : ({params}) => fetch(`https://toy-world-server-ten.vercel.app/toys/${params.id}`)
      },
      {
        path : "/alltoys",
        element : <AllToys></AllToys>
      },
      {
        path : "/viewdetails",
        element : <ViewDetails></ViewDetails>
      }
    ]
  },

]);

export default router