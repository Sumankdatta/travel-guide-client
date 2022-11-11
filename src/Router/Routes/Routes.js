import Main from "../../Layout/Main/Main";
import AboutDetails from "../../Pages/AboutUs/AboutDetails/AboutDetails";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Service from "../../Pages/Service/Service";
import ServicesAll from "../../Pages/ServicesAll/ServicesAll";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/aboutdetail',
                element:<AboutDetails></AboutDetails>
            },
            {
                path:'/servicesall',
                element:<ServicesAll></ServicesAll>
            },
            {
                path:'/checkout/:id',
                element:<Service></Service>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router;