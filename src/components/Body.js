import resList from "../../utils/mockData"
import RestaurantCard from "../components/RestaurantCard"
import {useState} from "react";



const Body = () => {

  // Local State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  //const arr = useState(resList)

  //const [listOfRestaurant, setListOfRestaurant] = arr;

  // const listOfRestaurant = arr[0]; 
  // const setListOfRestaurant = arr[1]; 




   //let  filteredlistOfRestaurant = [];

  // Normal Js Variable
    // let  listOfRestaurant2 = [
    //     {
    //                 "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //                 "info": {
    //                   "id": "156411",
    //                   "name": "The Good Bowl",
    //                   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/ae0aa182-0201-454e-83a1-cf094afecf49_156411.jpg",
    //                   "costForTwo": "₹400 for two",
    //                   "cuisines": [
    //                     "Biryani",
    //                     "Pastas",
    //                     "Punjabi",
    //                     "Desserts",
    //                     "Beverages"
    //                   ],
    //                   "avgRating": 4.3,
    //                 },
    //     },

    //     {
    //         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //                 "info": {
    //                   "id": "750227",
    //                   "name": "Daily Kitchen - Everyday Homely Meals",
    //                   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/0cf40dec-176c-4de8-8ee1-238885cc9374_750227.jpg",  
    //                   "costForTwo": "₹250 for two",
    //                   "cuisines": [
    //                     "Home Food",
    //                     "Indian",
    //                     "North Indian",
    //                     "Thalis"
    //                   ],
    //                   "avgRating": 3.9,
    //                 }
    //     },

    //     {
    //         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    //                 "info": {
    //                   "id": "825598",
    //                   "name": "Haldiram's Sweets and Namkeen",
    //                   "cloudinaryImageId": "0627374a8aca92da022f53c8aa4b8bc9",
    //                   "costForTwo": "₹300 for two",
    //                   "cuisines": [
    //                     "North Indian",
    //                     "South Indian",
    //                     "Fast Food"
    //                   ],
    //                   "avgRating": 4.4,
    //                 }
    //     }
    // ];

    return (
        <div className="body">
            <div 
                className="filter"> 
                <button className="filter-btn" 
                onClick={() =>{
                   let  filteredlistOfRestaurant = resList.filter(res=> res.info.avgRating >4);
                    setListOfRestaurant(filteredlistOfRestaurant);

                }} 
                > 
                Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {
                listOfRestaurant.map((restaurant) =>(
                     <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                )
                 }

            </div>
        </div>
        
    )
};

export default Body;