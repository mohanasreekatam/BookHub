import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shopp from "../shop/Shopp";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import LoginUser from "../components/LoginUser";

  const router = createBrowserRouter([
    {
      path:'/',
      element: <LoginUser/>
  },
    {
      path: "/",
      element: <App/>,
      children:[
       
        {
            path:'/home',
            element: <Home/>
        },
        {
            path : '/shop',
            element:<Shopp/>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
            path:'/blog',
            element:<Blog/>
        },
        {
          path:"/book/:id",
          element : <SingleBook/>,
          loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path : "/admin/dashboard/upload",
          element: <UploadBooks/>
        },
        {
          path : "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          
            path : "/admin/dashboard/edit-books/:id",
            element: <EditBooks/>,
            loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
          
        }
      ]
    },
    {
      path:"sign-up",
      element:<SignUp/>

    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"logout",
      element:<Logout/>
    }
  ]);
  export default router;