
 import ReactDOM from "react-dom/client";
 import Header from "./components/Header";
 import Body from "./components/Body";
 import Contact from "./components/Contact";
 import Error from "./components/Error";
 import {createBrowserRouter, Outlet, RouterProvider } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from 'react';
//import Grocery from "./components/Grocery";



//const Grocery = lazy(() => import("./components/Grocery"));
// Lazy Loading , Chunking

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));


// styles
const StyleCard = () =>{
    backgroundcolor :"black"
}


const AppLayout = () => {


    return (
        <div className="app">
            <Header/>
           <Outlet/>
        </div>
    )
}


// Configuration: means that some information that will define that what will happen on Specific route.
const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading..</h1>} ><About/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/contact/Rahul",
                element: <Contact/>
            },
            {
                path: "/cart",
                element:<Suspense fallback= {<h1>Loading..</h1>}> <Cart/></Suspense>
            },
            {
                path: "/restaurants/:resId",    // resId is dynamic, it can change according to restaurant 
                element: <RestaurantMenu /> 
            }, // Grocery
            {
                path: "/grocery",    // resId is dynamic, it can change according to restaurant 
                element: <Suspense fallback={<h1>Loading..</h1>}><Grocery/> </Suspense>
            }

        ],
        errorElement: <Error/>
        },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

// JSX



