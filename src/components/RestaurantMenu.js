import { useEffect } from "react";

const RestaurantMenu = () =>{

    useEffect(() => {
        fetMenu();
    }, [] );

    const fetMenu = async () =>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.951868&lng=77.7076577&restaurantId=156411&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        console.log(json);
    };

    return(

        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
                
            </ul>
        </div>
    )
}

export default RestaurantMenu;