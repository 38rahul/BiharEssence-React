
 import ReactDOM from "react-dom/client";
 import Header from "./components/Header";
 import Body from "./components/Body";
 import About from "./components/About";
 import Contact from "./components/Contact";
 import Error from "./components/Error";
 import Cart from "./components/Cart";

 import {createBrowserRouter, Outlet, RouterProvider } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";




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
                element: <About/>
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
                element: <Cart/>
            },
            {
                path: "/restaurants/:resId",    // resId is dynamic, it can change according to restaurant 
                element: <RestaurantMenu /> 
            }
        ],
        errorElement: <Error/>
        },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

// JSX



