import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);
    const {resId}= useParams();

    console.log(resId);



    useEffect(() => {
        fetchMenu();
    }, [] );

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API+resId); //+ //"&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        setResInfo(json?.data);
       
    };

    if(resInfo === null){
        return <Shimmer/>
    }

 //   console.log(resInfo);

   const {name,cuisines ,costForTwoMessage, avgRating} = resInfo?.cards[2].card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   
   

      
       

    return  (

        <div className="menu">
           
        <h1>{name}</h1>
        <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRating} Stars</h3>
        <h1>{itemCards[0]?.card?.info?.category}</h1>
        <ul>
            {itemCards.map( (item) => <li key={item?.card?.info?.id}>{item.card.info.name} - Rs. <b>{ item?.card?.info?.price/100}</b></li>)}
            
        </ul>
            
        </div>
    )
}

export default RestaurantMenu;